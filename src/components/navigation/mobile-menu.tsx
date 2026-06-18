"use client";

import { useState }  from "react";
import Link          from "next/link";

interface MobileMenuProps {
  links: { label: string; href: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="p-2 text-white"
      >
        {/* Three-line hamburger with neon middle bar */}
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <rect width="22" height="2" rx="1" fill="currentColor" />
          <rect y="7" width="14" height="2" rx="1" fill="#b44fff" />
          <rect y="14" width="22" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute top-20 left-4 right-4
            glass rounded-2xl p-6
            flex flex-col gap-5
          "
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                font-mono text-sm tracking-[0.2em] uppercase
                text-muted hover:text-neon
                transition-colors duration-200
              "
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#submit"
            onClick={() => setOpen(false)}
            className="
              mt-2 text-center
              border border-neon/50 rounded-full
              px-6 py-3
              font-mono text-xs tracking-[0.15em] uppercase text-neon
              hover:bg-neon/10 transition-colors duration-200
            "
          >
            Submit Demo
          </Link>
        </div>
      )}
    </div>
  );
}
