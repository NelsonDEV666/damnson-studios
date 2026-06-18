import { AboutLegacy } from "@/components/about/about-legacy";

export const metadata = {
  title: "Legacy — Damnson Studios",
};

// AboutLegacy already renders LegacyStats internally, so it isn't
// imported separately here — that would duplicate the stats row.
export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AboutLegacy />
    </main>
  );
}
