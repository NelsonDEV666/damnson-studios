import { DemoSubmission } from "@/components/demo/demo-submission";

export const metadata = {
  title: "Submit Demo — Damnson Studios",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-container max-w-3xl">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-4">
          Work With Us
        </p>
        <h1
          className="font-display uppercase text-white leading-none mb-3"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          Submit Your<br />
          <span style={{ color: "#b44fff", textShadow: "0 0 20px #b44fff66" }}>
            Demo.
          </span>
        </h1>
        <p className="text-muted text-sm leading-relaxed mb-10 max-w-xl">
          No managers required. If the sound is raw and the vision is locked, we want to hear it.
        </p>

        <DemoSubmission />
      </div>
    </main>
  );
}
