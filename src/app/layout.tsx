import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart AI Shopping Agent",
  description: "AI-powered shopping assistant with Gemini and Algolia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        <main className="mx-auto max-w-4xl px-4 py-8">
          <div className="glass rounded-2xl border p-6 shadow-sm">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
