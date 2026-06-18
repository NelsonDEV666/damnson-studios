interface HeroVideoProps {
  src?: string;
}

export function HeroVideo({ src }: HeroVideoProps) {
  return (
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background: "linear-gradient(160deg,#1a0035 0%,#0c0c0e 55%,#0c0c0e 100%)",
      }}
    >
      {src ? (
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={src}
        />
      ) : (
        /* Placeholder atmosphere when no video src provided */
        <>
          {/* Purple lens glow */}
          <div style={{
            position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)",
            width:"min(600px,90vw)", height:"min(600px,90vw)",
            background:"radial-gradient(ellipse,#6a1daf33 0%,transparent 70%)",
            filter:"blur(40px)", pointerEvents:"none",
          }} />
          {/* Grid lines */}
          <div style={{
            position:"absolute", inset:0,
            backgroundImage:"linear-gradient(#b44fff08 1px,transparent 1px),linear-gradient(90deg,#b44fff08 1px,transparent 1px)",
            backgroundSize:"60px 60px", pointerEvents:"none",
          }} />
          {/* Scanlines */}
          <div style={{
            position:"absolute", inset:0,
            background:"repeating-linear-gradient(0deg,transparent,transparent 3px,#00000014 3px,#00000014 4px)",
            pointerEvents:"none",
          }} />
        </>
      )}

      {/* Bottom + radial fade to void */}
      <div style={{
        position:"absolute", inset:0,
        background:"radial-gradient(ellipse at center,transparent 30%,#0c0c0e 85%), linear-gradient(to top,#0c0c0e 0%,transparent 40%)",
        pointerEvents:"none",
      }} />
    </div>
  );
}
