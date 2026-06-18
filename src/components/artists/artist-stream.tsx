"use client";

import { useEffect, useState } from "react";
import { Artist } from "@/types/artist";

interface ArtistStreamProps {
  artist:     Artist;
  className?: string;
}

interface StreamingLink {
  platform: string;
  url:      string;
  embedUrl: string;
  icon:     string;
}

export function ArtistStream({ artist, className = "" }: ArtistStreamProps) {
  const [isMobile, setIsMobile]               = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>("spotify");

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    setIsMobile(/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua.toLowerCase()));
    const best = determineBestPlatform(artist);
    if (best) setSelectedPlatform(best);
  }, [artist]);

  const determineBestPlatform = (a: Artist): string | null => {
    const { streamingIDs } = a;
    if (streamingIDs.spotify)    return "spotify";
    if (streamingIDs.youtube)    return "youtube";
    if (streamingIDs.soundcloud) return "soundcloud";
    return null;
  };

  const getStreamingLinks = (a: Artist): StreamingLink[] => {
    const links: StreamingLink[] = [];
    const { streamingIDs } = a;

    if (streamingIDs.spotify) {
      links.push({
        platform: "spotify",
        url:      isMobile
          ? `spotify:track:${streamingIDs.spotify}`
          : `https://open.spotify.com/embed/track/${streamingIDs.spotify}`,
        embedUrl: `https://open.spotify.com/embed/track/${streamingIDs.spotify}`,
        icon: "🎵",
      });
    }
    if (streamingIDs.youtube) {
      links.push({
        platform: "youtube",
        url:      isMobile
          ? `vnd.youtube:${streamingIDs.youtube}`
          : `https://www.youtube.com/embed/${streamingIDs.youtube}`,
        embedUrl: `https://www.youtube.com/embed/${streamingIDs.youtube}`,
        icon: "▶️",
      });
    }
    if (streamingIDs.soundcloud) {
      links.push({
        platform: "soundcloud",
        url:      isMobile
          ? `soundcloud:${streamingIDs.soundcloud}`
          : `https://w.soundcloud.com/player/?url=https://soundcloud.com/${streamingIDs.soundcloud}`,
        embedUrl: `https://w.soundcloud.com/player/?url=https://soundcloud.com/${streamingIDs.soundcloud}`,
        icon: "☁️",
      });
    }
    return links;
  };

  const streamingLinks  = getStreamingLinks(artist);
  const currentStream   = streamingLinks.find((l) => l.platform === selectedPlatform) || streamingLinks[0];

  if (streamingLinks.length === 0) {
    return <div className="text-muted">No streaming links available</div>;
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Platform selector */}
      <div className="flex flex-wrap gap-2 mb-4">
        {streamingLinks.map((link) => (
            <button
              key={link.platform}
              suppressHydrationWarning={true}
              onClick={() => setSelectedPlatform(link.platform)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${selectedPlatform === link.platform
                  ? "bg-neon text-void"
                  : "bg-surface text-muted hover:bg-border"
                }
              `}
            >
          
            {link.icon}{" "}
            {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
          </button>
        ))}
      </div>

      {/* Player */}
      <div className="relative w-full aspect-video bg-ash rounded-2xl overflow-hidden">
        {isMobile ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-white font-medium">
              Open in {currentStream?.platform.charAt(0).toUpperCase()}{currentStream?.platform.slice(1)} App
            </p>
            <a
              href={currentStream?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 bg-neon hover:bg-[#d17fff]
                text-void font-bold rounded-lg
                transition-colors duration-200
              "
            >
              Open Now {currentStream?.icon}
            </a>
          </div>
        ) : (
          <iframe
            src={currentStream?.embedUrl}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            allow="encrypted-media; autoplay; clipboard-write"
            title={`${artist.stageName} on ${selectedPlatform}`}
          />
        )}
      </div>

      <div className="mt-2 flex justify-between text-xs text-muted/60">
        <span>🔗 Smart link activated</span>
        <span className="hidden sm:block">
          {isMobile ? "📱 Mobile optimized" : "💻 Desktop optimized"}
        </span>
      </div>
    </div>
  );
}
