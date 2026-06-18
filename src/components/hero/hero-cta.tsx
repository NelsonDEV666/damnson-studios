import Link from "next/link";

interface CtaProps {
  primary:    { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function HeroCta({ primary, secondary }: CtaProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
      <Link
        href={primary.href}
        className="
          inline-flex items-center gap-2
          bg-neon text-void
          font-body font-bold text-sm tracking-[0.08em] uppercase
          px-7 py-4 rounded-sm
          hover:bg-[#d17fff] hover:shadow-neon
          hover:-translate-y-0.5
          transition-all duration-200
        "
      >
        ▶ {primary.label}
      </Link>

      {secondary && (
        <Link
          href={secondary.href}
          className="
            inline-flex items-center gap-2
            bg-transparent text-muted
            border border-muted/50
            font-body font-semibold text-sm tracking-[0.08em] uppercase
            px-7 py-4 rounded-sm
            hover:border-neon hover:text-neon hover:shadow-neon
            hover:-translate-y-0.5
            transition-all duration-200
          "
        >
          {secondary.label}
        </Link>
      )}
    </div>
  );
}
