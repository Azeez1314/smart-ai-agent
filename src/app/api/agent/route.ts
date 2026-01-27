import { NextRequest, NextResponse } from "next/server";
import { runAgent } from "@/src/lib/agent/runAgent";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Generate a simple session ID (in production, use proper session management)
    const sessionId = request.headers.get("x-session-id") || "default";

    const response = await runAgent(message, sessionId);

    return NextResponse.json(response);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}