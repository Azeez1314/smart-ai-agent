export type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
};

export class ConversationMemory {
  private messages: Message[] = [];
  private maxMessages: number = 10;

  addMessage(role: "user" | "assistant", content: string) {
    this.messages.push({
      role,
      content,
      timestamp: Date.now(),
    });

    // Keep only the last N messages to prevent context overflow
    if (this.messages.length > this.maxMessages) {
      this.messages = this.messages.slice(-this.maxMessages);
    }
  }

  getHistory(): string {
    return this.messages
      .map((msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`)
      .join("\n");
  }

  getMessages(): Message[] {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}

// Store conversations by session ID
const conversations = new Map<string, ConversationMemory>();

export const getConversation = (sessionId: string): ConversationMemory => {
  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, new ConversationMemory());
  }
  return conversations.get(sessionId)!;
};

export const clearConversation = (sessionId: string) => {
  conversations.delete(sessionId);
};