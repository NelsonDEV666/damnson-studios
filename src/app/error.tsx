"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Damnson Studios — runtime error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-6 animate-flicker">
        System Error
      </p>
      <h1
        className="font-display uppercase text-white leading-none mb-6"
        style={{ fontSize: "clamp(3rem,10vw,6rem)" }}
      >
        Static In<br />The Signal.
      </h1>
      <p className="text-muted text-sm max-w-sm mb-10 leading-relaxed">
        Something broke on our end. Try again — if it keeps happening, hit us up.
      </p>
      <button
        onClick={() => reset()}
        className="
          bg-neon text-void
          font-body font-bold text-sm tracking-[0.08em] uppercase
          px-7 py-4 rounded-sm
          hover:bg-[#d17fff] hover:shadow-neon
          transition-all duration-200
        "
      >
        ↻ Try Again
      </button>
    </main>
  );
}
