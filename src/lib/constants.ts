import { Artist } from "@/types/artist";

export const ARTISTS: Artist[] = [
  {
    id:        "1",
    name:      "Cokeboii Abraxas",
    stageName: "Cokeboii Abraxas",
    genres:    ["Hip-Hop", "Underground", "Experimental"],
    location:  "Angeles City, Pampanga",
    socialLinks: {
      instagram: "https://instagram.com/cokeboiiabraxas",
      twitter:   "https://twitter.com/cokeboiiabraxas",
    },
    streamingIDs: {
      spotify:    "3sK8LhP8Xz8Jm3KQn9XpL5",
      youtube:    "UCxR9zP5Xm8JkQn2LpX8Jm3",
      soundcloud: "cokeboii-abraxas",
    },
    featured:   true,
    unreleased: false,
    bio: "Pioneering the underground sound of Angeles City with raw, unfiltered energy.",
  },
  {
    id:        "2",
    name:      "Jeybi",
    stageName: "JEYBI",
    genres:    ["R&B", "Soul", "Alternative"],
    location:  "San Fernando, Pampanga",
    socialLinks: {
      instagram: "https://instagram.com/jeybi",
      tiktok:    "https://tiktok.com/@jeybi",
    },
    streamingIDs: {
      spotify:    "7tM9V5K9nQ8LpX3JmK9XpL2",
      youtube:    "UCyR9zP5Xm8JkQn2LpX8Jm4",
      appleMusic: "jeybi",
    },
    featured:   true,
    unreleased: false,
    bio: "Soulful vocals meeting modern production, representing the new wave of Pampanga R&B.",
  },
  {
    id:        "3",
    name:      "Abraxas",
    stageName: "ABRAXAS",
    genres:    ["Electronic", "Ambient", "Experimental"],
    location:  "Clark, Pampanga",
    socialLinks: {
      instagram: "https://instagram.com/abraxasmusic",
      facebook:  "https://facebook.com/abraxasmusic",
    },
    streamingIDs: {
      spotify:    "9uR9zP5Xm8JkQn2LpX8Jm5",
      soundcloud: "abraxas-sound",
    },
    featured:   false,
    unreleased: true,
    bio: "Pushing sonic boundaries with ethereal soundscapes and experimental textures.",
  },
  {
    id:        "4",
    name:      "Cokeboii Abraxas",
    stageName: "Cokeboii Abraxas (Unreleased)",
    genres:    ["Hip-Hop", "Lo-Fi", "Experimental"],
    location:  "Angeles City, Pampanga",
    socialLinks: {
      instagram: "https://instagram.com/cokeboii_abraxas",
    },
    streamingIDs: {
      soundcloud: "cokeboii-abraxas-ghost",
    },
    featured:   false,
    unreleased: true,
    bio: "Ghost project — new material dropping soon from the underground.",
  },
];

export const LOCATIONS = [
  "Angeles City, Pampanga",
  "San Fernando, Pampanga",
  "Clark, Pampanga",
  "Mabalacat, Pampanga",
  "Porac, Pampanga",
] as const;

export const GENRES = [
  "Hip-Hop",
  "R&B",
  "Electronic",
  "Ambient",
  "Experimental",
  "Underground",
  "Lo-Fi",
  "Soul",
  "Alternative",
  "Drill",
] as const;
