/** Capitalise first letter of every word. */
export const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());

/** Clamp a number between min and max. */
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/** Delay helper for async flows. */
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Build a Spotify embed URL from a track ID. */
export const spotifyEmbed = (id: string) =>
  `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`;

/** Build a YouTube embed URL from a video ID. */
export const youtubeEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`;

/** Build a SoundCloud embed URL from a slug. */
export const soundcloudEmbed = (slug: string) =>
  `https://w.soundcloud.com/player/?url=https://soundcloud.com/${slug}&color=%23b44fff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;
