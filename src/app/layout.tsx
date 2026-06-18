import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:       "Damnson Studios — Angeles City, PH",
  description: "Independent record label built from the streets of Angeles City, Philippines. Elevating Filipino underground music.",
  openGraph: {
    title:       "Damnson Studios",
    description: "Built from the streets. Made for the culture.",
    locale:      "en_PH",
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-white antialiased">
        {children}
      </body>
    </html>
  );
}
