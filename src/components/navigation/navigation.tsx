"use client";

import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { NavLink }    from "./nav-link";
import { NavigationProps } from "@/types/navigation";

const NAV_LINKS = [
  { label: "Roster",   href: "#roster"   },
  { label: "Releases", href: "#releases" },
  { label: "Legacy",   href: "#legacy"   },
  { label: "Submit",   href: "#submit"   },
];

export function Navigation({ logo }: Pick<NavigationProps, "logo">) {
  return (
    <header
      className="fixed top-0 z-50 w-full"
      aria-label="Main Navigation"
    >
      <nav
        className="
          glass
          mx-auto mt-4
          flex h-16 max-w-7xl
          items-center justify-between
          rounded-full px-6
        "
      >
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-neon animate-flicker text-xl">⚡</span>
          <span className="font-display text-xl tracking-widest text-white">
            {logo}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <MobileMenu links={NAV_LINKS} />
      </nav>
    </header>
  );
}
