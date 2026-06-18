import { HeroVideo } from "./hero-video";
import { HeroCta }   from "./hero-cta";
import { HeroProps }  from "@/types/navigation";

export function Hero({ titleTop, titleBottom, videoSrc, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col justify-end pb-20 md:pb-32"
      aria-label="Hero"
    >
      {/* Muted video / dark background */}
      <HeroVideo src={videoSrc} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">

        {/* Eyebrow */}
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-5 animate-flicker">
          ⚡ Angeles City, Philippines
        </p>

        {/* Headline */}
        <h1
          className="font-display uppercase leading-none"
          style={{ fontSize: "clamp(5rem, 15vw, 14rem)" }}
        >
          <span className="block text-white">{titleTop}</span>
          <span className="block text-neon animate-flicker">{titleBottom}</span>
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-muted font-light text-base md:text-lg max-w-sm leading-relaxed">
          Built from the streets.<br />
          <strong className="text-white font-semibold">Made for the culture.</strong>
        </p>

        {/* CTAs */}
        <HeroCta primary={ctaPrimary} secondary={ctaSecondary} />
      </div>
    </section>
  );
}
