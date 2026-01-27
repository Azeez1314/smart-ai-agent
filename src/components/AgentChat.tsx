"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type Role = "user" | "assistant";

type ProductResult = {
  objectID?: string;
  image?: string;
  name?: string;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  content?: string;
};

type Message = {
  role: Role;
  content: string;
  results?: ProductResult[];
};

const SUGGESTIONS = [
  "Show me electronics under £100",
  "What's your return policy?",
  "Best fitness products",
];

export default function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm your AI shopping assistant. Ask me about products, prices, or store policies!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, sessionId: "demo" }),
      });

      const data = await res.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message || data.reply || "I'm here to help!",
        results: data.toolResults || data.results,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col h-[720px] max-w-4xl mx-auto rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white dark:bg-neutral-950 shadow-xl overflow-hidden">
      <Header />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-5 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="space-y-6">
          {messages.map((m, i) => (
            <ChatMessage key={i} message={m} />
          ))}

          {loading && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-gray-200/60 dark:border-white/10 bg-white dark:bg-neutral-950 p-4">
        {messages.length === 1 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {SUGGESTIONS.map((text) => (
              <button
                key={text}
                onClick={() => setInput(text)}
                className="rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 transition"
              >
                {text}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about products or store policies..."
            disabled={loading}
            className="flex-1 rounded-xl border border-gray-300/60 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:shadow-xl transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
            <span>✨</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 px-6 py-5 text-white">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-white/20 backdrop-blur">
          🤖
        </div>
        <div>
          <h2 className="text-lg font-semibold">AI Shopping Assistant</h2>
          <p className="text-xs text-blue-100">
            Find products, prices & policies instantly
          </p>
        </div>
      </div>
    </div>
  );
}

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={clsx("flex animate-fadeIn", isUser ? "justify-end" : "justify-start")}>
      <div
        className={clsx(
          "flex max-w-[85%] gap-3",
          isUser && "flex-row-reverse"
        )}
      >
        <Avatar role={message.role} />

        <div className="space-y-3">
          <div
            className={clsx(
              "rounded-2xl px-5 py-3 shadow-sm",
              isUser
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-tr-sm"
                : "bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 rounded-tl-sm border border-gray-200/60 dark:border-white/10"
            )}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          </div>

          {message.results?.length ? (
            <ProductGrid results={message.results} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Avatar({ role }: { role: Role }) {
  const isUser = role === "user";

  return (
    <div
      className={clsx(
        "h-10 w-10 rounded-full grid place-items-center text-white shadow",
        isUser
          ? "bg-gradient-to-br from-blue-500 to-blue-600"
          : "bg-gradient-to-br from-purple-500 to-pink-500"
      )}
    >
      {isUser ? "👤" : "🤖"}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex animate-fadeIn">
      <div className="flex gap-3">
        <Avatar role="assistant" />
        <div className="rounded-2xl rounded-tl-sm bg-white dark:bg-neutral-900 border border-gray-200/60 dark:border-white/10 px-5 py-4">
          <div className="flex gap-2">
            {[0, 200, 400].map((d) => (
              <span
                key={d}
                className="h-2 w-2 rounded-full bg-gray-400 animate-bounce"
                style={{ animationDelay: `${d}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGrid({ results }: { results: ProductResult[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {results.map((r) => (
        <div
          key={r.objectID ?? r.name}
          className="group overflow-hidden rounded-xl border border-gray-200/60 dark:border-white/10 bg-white dark:bg-neutral-900 transition hover:shadow-lg"
        >
          {r.image && (
            <div className="relative h-40 w-full bg-gray-100 dark:bg-neutral-800 overflow-hidden">
              <Image
                src={r.image}
                alt={r.name || r.title || "Product"}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
          )}

          <div className="p-4 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {r.name || r.title}
              </h3>
              {r.price && (
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  £{r.price}
                </span>
              )}
            </div>

            {r.category && (
              <span className="inline-block rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs text-blue-700 dark:text-blue-300">
                {r.category}
              </span>
            )}

            {(r.description || r.content) && (
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
                {r.description || r.content}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
