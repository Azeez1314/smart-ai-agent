import AgentChat from "@/src/components/AgentChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* App Card */}
        <div className="rounded-2xl border bg-card shadow-sm">
          {/* Header */}
          <div className="border-b px-6 py-4">
            <h1 className="text-lg font-semibold">
              Smart AI Shopping Agent
            </h1>
            <p className="text-sm text-muted-foreground">
              Powered by Google Gemini & Algolia Search
            </p>
          </div>

          {/* Chat */}
          <div className="p-6">
            <AgentChat />
          </div>

          {/* Footer / Suggestions */}
          <div className="border-t px-6 py-4 text-sm text-muted-foreground">
            <p className="mb-2">Try asking:</p>
            <ul className="space-y-1">
              <li>“Show me electronics under $100”</li>
              <li>“What’s your return policy?”</li>
              <li>“I need a gift for someone who likes fitness”</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
