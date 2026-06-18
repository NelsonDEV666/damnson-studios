import { Artist }     from "@/types/artist";
import { ArtistCard } from "./artist-card";

interface ArtistGridProps {
  artists: Artist[];
}

export function ArtistGrid({ artists }: ArtistGridProps) {
  return (
    <section
      id="roster"
      aria-label="Artist Roster"
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 lg:px-12"
    >
      <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-4">
        The Roster
      </p>
      <h2
        className="font-display uppercase text-white leading-none mb-14"
        style={{ fontSize:"clamp(2rem,5vw,3.5rem)" }}
      >
        The Ones<br />Who Built It.
      </h2>

      <div
        className="
          grid gap-4
          grid-cols-2
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            name={artist.stageName}
            image={artist.imageUrl ?? ""}
            genre={artist.genres[0] ?? ""}
            location={artist.location}
            featured={artist.featured}
            unreleased={artist.unreleased}
          />
        ))}
      </div>
    </section>
  );
}
