import { LegacyStats } from "./stat-counter";

export function AboutLegacy() {
  return (
    <section
      id="legacy"
      aria-labelledby="about-heading"
      className="py-24 md:py-36 max-w-7xl mx-auto px-6 lg:px-12"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left — heading block */}
        <div>
          <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-4">
            The Legacy
          </p>
          <h2
            id="about-heading"
            className="font-display uppercase leading-none text-white"
            style={{ fontSize: "clamp(2.5rem,7vw,5rem)" }}
          >
            Angeles City<br />
            <span className="text-neon" style={{ textShadow:"0 0 20px #b44fff88" }}>
              Raised Us.
            </span><br />
            The World<br />Will Hear Us.
          </h2>
        </div>

        {/* Right — narrative */}
        <article>
          <p className="text-muted leading-relaxed text-[0.95rem] mb-5">
            Damnson Studios didn&apos;t start in a boardroom. It started in barangays,
            in bedrooms with busted monitors, in the streets of Angeles City where the
            music had to be louder than everything trying to drown it out. We are an
            independent record label built on one mandate: give the Filipino underground
            a real home.
          </p>
          <p className="text-muted/70 leading-relaxed text-[0.95rem] mb-5">
            From the back alleys of Angeles to streaming platforms worldwide, we develop
            artists who don&apos;t follow formats. Our sound is raw, our vision is total, and
            our loyalty is to the culture — not the charts. Every release we put out carries
            the weight of a scene that has been slept on for too long.
          </p>
          <p className="text-muted/70 leading-relaxed text-[0.95rem]">
            This is Pampanga&apos;s imprint. Philippines&apos; flag in the underground.
            We move in silence — until the speakers cut on.
          </p>
        </article>
      </div>

      {/* Stats row */}
      <div className="mt-20">
        <LegacyStats />
      </div>
    </section>
  );
}
