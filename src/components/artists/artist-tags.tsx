export function GenreTag({ genre }: { genre: string }) {
  return (
    <span
      className="
        inline-block
        font-mono text-[0.55rem] tracking-[0.2em] uppercase
        text-neon border border-neon/30
        bg-void/70 backdrop-blur-sm
        px-2 py-0.5 mb-1
      "
    >
      {genre}
    </span>
  );
}

export function LocationTag({ location }: { location: string }) {
  return (
    <p className="font-mono text-[0.55rem] tracking-wide text-muted/70 uppercase">
      {location}
    </p>
  );
}
