interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  label?: string;
}

const SIZE_MAP: Record<NonNullable<LoadingSpinnerProps["size"]>, number> = {
  sm: 20,
  md: 40,
  lg: 64,
};

export function LoadingSpinner({ size = "md", label }: LoadingSpinnerProps) {
  const px = SIZE_MAP[size];

  return (
    <div className="flex flex-col items-center gap-3" role="status" aria-live="polite">
      <span
        className="inline-block rounded-full animate-pulseNeon"
        style={{
          width: px,
          height: px,
          border: "3px solid rgba(180,79,255,0.2)",
          borderTopColor: "#b44fff",
          animation: "damnson-spin 0.8s linear infinite, pulseNeon 2.5s infinite",
        }}
      />
      {label && (
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted">
          {label}
        </span>
      )}
      <style>{`
        @keyframes damnson-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
