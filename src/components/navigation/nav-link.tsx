"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href:     string;
  children: ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        font-mono text-xs tracking-[0.2em] uppercase
        text-muted hover:text-neon
        transition-colors duration-200
      "
    >
      {children}
    </Link>
  );
}
