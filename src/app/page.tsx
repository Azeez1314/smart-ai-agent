import { WikiCard } from "@/components/ui/wiki-card";

export default function Home() {
  return (
    <div>
      <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6">
        <WikiCard
          title="Complete Intro to React"
          author="Brian Holt"
          date="Sep 2025"
          summary="Learn React from the ground up with Brian Holt. Covers components, hooks, state, effects, and building modern UIs. Perfect for beginners and those wanting a solid foundation."
          href="https://frontendmasters.com/courses/complete-react-v9/"
        />
      </main>
    </div>
  );
}
