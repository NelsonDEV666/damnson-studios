import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-6 animate-flicker">
        404
      </p>
      <h1
        className="font-display uppercase text-white leading-none mb-6"
        style={{ fontSize: "clamp(3rem,10vw,7rem)" }}
      >
        Lost<br />Signal.
      </h1>
      <p className="text-muted text-sm max-w-sm mb-10 leading-relaxed">
        Whatever you were looking for didn&apos;t make it to the release. Let&apos;s get you back.
      </p>
      <Link
        href="/"
        className="
          bg-neon text-void
          font-body font-bold text-sm tracking-[0.08em] uppercase
          px-7 py-4 rounded-sm
          hover:bg-[#d17fff] hover:shadow-neon
          transition-all duration-200
        "
      >
        ▶ Back Home
      </Link>
    </main>
  );
}
