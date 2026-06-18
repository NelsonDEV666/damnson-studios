import { ARTISTS } from "@/lib/constants";
import { ArtistStream } from "@/components/artists/artist-stream";

export const metadata = {
  title: "Roster — Damnson Studios",
};

export default function ArtistsPage() {
  const releasedArtists = ARTISTS.filter((artist) => !artist.unreleased);

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="section-container">
        <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-neon mb-4">
          Full Catalog
        </p>
        <h1
          className="font-display uppercase text-white leading-none mb-14"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)" }}
        >
          Stream The<br />Roster.
        </h1>

        <div className="space-y-16">
          {releasedArtists.map((artist) => (
            <div key={artist.id} className="border-b border-border pb-12 last:border-none">
              <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
                <h2 className="font-display text-3xl md:text-4xl tracking-widest text-white">
                  {artist.stageName}
                </h2>
                <span className="font-mono text-xs text-muted uppercase tracking-wide">
                  {artist.location}
                </span>
              </div>
              <ArtistStream artist={artist} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
