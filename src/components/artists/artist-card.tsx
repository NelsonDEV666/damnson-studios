"use client";

import Image from "next/image";
import { ArtistCardProps } from "@/types/navigation";
import { GenreTag, LocationTag } from "./artist-tags";

export function ArtistCard({ name, image, genre, location, featured, unreleased }: ArtistCardProps) {
  if (unreleased) {
    return (
      <article
        className="
          aspect-[3/4]
          border border-dashed border-neon/30
          glass rounded-3xl
          flex flex-col items-center justify-center gap-3
          animate-pulseNeon
          cursor-not-allowed select-none
        "
        aria-label="Upcoming unreleased artist"
      >
        <span className="font-display text-4xl text-neon/30">???</span>
        <span className="font-mono text-[0.55rem] tracking-[0.25em] text-muted/40 uppercase">
          Coming Soon
        </span>
      </article>
    );
  }

  return (
    <article
      className="
        group relative overflow-hidden rounded-3xl
        border border-border
        transition-all duration-300
        hover:border-neon hover:-translate-y-1
        hover:shadow-neon
        cursor-pointer
      "
      aria-label={`Artist: ${name}`}
    >
      {/* Image */}
      <div className="aspect-[3/4] relative bg-surface">
        <Image
          src={image || "/placeholder-artist.jpg"}
          alt={name}
          fill
          className="
            object-cover
            grayscale transition-all duration-700
            group-hover:grayscale-0 group-hover:scale-105
          "
          sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw"
        />

        {/* Featured badge */}
        {featured && (
          <div className="
            absolute top-3 left-3 z-10
            font-mono text-[0.6rem] tracking-[0.2em] uppercase
            text-neon border border-neon/40
            bg-void/80 backdrop-blur-sm px-2 py-1
          ">
            Featured
          </div>
        )}

        {/* Neon ring overlay on hover */}
        <div
          aria-hidden="true"
          className="
            absolute inset-0 opacity-0
            neon-ring transition duration-300
            group-hover:opacity-100
          "
        />

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background:"linear-gradient(to top,#0c0c0e 0%,transparent 55%)" }}
        />

        {/* Tags */}
        <div className="absolute bottom-0 w-full p-4 z-10">
          <GenreTag genre={genre} />
          <LocationTag location={location} />
        </div>
      </div>

      {/* Card body */}
      <div className="p-4 bg-ash">
        <h3 className="font-display text-xl tracking-widest text-white leading-tight">{name}</h3>
        <div className="flex items-center gap-4 mt-3">
          <a href="#" className="font-mono text-[0.6rem] text-neon tracking-wide hover:text-[#d17fff] transition-colors">
            ▶ Stream
          </a>
          <a href="#" className="font-mono text-[0.6rem] text-muted tracking-wide hover:text-white transition-colors">
            Profile →
          </a>
        </div>
      </div>
    </article>
  );
}
