import { getGeminiModel } from "../gemini";
import { logger } from "../logger";
import { SYSTEM_PROMPT, createUserPrompt } from "./prompts";
import { callTool, tools } from "./tools";
import { getConversation } from "./memory";

export type AgentResponse = {
  message: string;
  toolUsed?: string;
  toolResults?: any;
  error?: string;
};

export async function runAgent(
  userMessage: string,
  sessionId: string = "default"
): Promise<AgentResponse> {
  try {
    const conversation = getConversation(sessionId);
    const conversationHistory = conversation.getHistory();
    
    logger.info("Running agent", { userMessage, sessionId });

    // Add user message to memory
    conversation.addMessage("user", userMessage);

    // Step 1: Ask LLM if it needs to use a tool
    const model = getGeminiModel();
    const prompt = `${SYSTEM_PROMPT}\n\n${createUserPrompt(userMessage, conversationHistory)}`;
    
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    logger.debug("LLM Response", { response });

    // Step 2: Check if LLM wants to use a tool
    const toolMatch = response.match(/\{[\s\S]*"tool"[\s\S]*\}/);
    
    if (toolMatch) {
      try {
        const toolCall = JSON.parse(toolMatch[0]);
        const toolName = toolCall.tool as keyof typeof tools;
        const toolInput = toolCall.input;

        logger.info("Tool call detected", { toolName, toolInput });

        // Step 3: Execute the tool
        const toolResults = await callTool(toolName, toolInput);
        
        logger.debug("Tool results", { toolResults });

        // Step 4: Ask LLM to respond based on tool results
        const followUpPrompt = `${SYSTEM_PROMPT}\n\n${createUserPrompt(userMessage, conversationHistory)}\n\nTool Results: ${JSON.stringify(toolResults)}\n\nNow provide a helpful response to the user based on these results. Do not use JSON format.`;
        
        const followUpResult = await model.generateContent(followUpPrompt);
        const finalResponse = followUpResult.response.text();

        // Add assistant response to memory
        conversation.addMessage("assistant", finalResponse);

        return {
          message: finalResponse,
          toolUsed: toolName,
          toolResults,
        };
      } catch (error) {
        logger.error("Tool execution error", error);
        const errorMessage = "I encountered an error while searching. Let me try to help you differently.";
        conversation.addMessage("assistant", errorMessage);
        return {
          message: errorMessage,
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }
    }

    // No tool needed, use LLM response directly
    conversation.addMessage("assistant", response);
    
    return {
      message: response,
    };
  } catch (error) {
    logger.error("Agent error", error);
    return {
      message: "I'm sorry, I encountered an error. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}