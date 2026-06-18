export interface NavigationProps {
  logo: string;
  links: {
    label: string;
    href:  string;
  }[];
}

export interface HeroProps {
  titleTop:    string;
  titleBottom: string;
  videoSrc?:   string;
  ctaPrimary: {
    label: string;
    href:  string;
  };
  ctaSecondary?: {
    label: string;
    href:  string;
  };
}

export interface AboutLegacyProps {
  paragraphs: string[];
  stats: {
    label: string;
    value: number;
  }[];
}

export interface ArtistCardProps {
  name:       string;
  image:      string;
  genre:      string;
  location:   string;
  featured?:  boolean;
  unreleased?: boolean;
}

export interface ArtistGridProps {
  artists: import("./artist").Artist[];
}

export interface DemoSubmissionProps {
  email:     string;
  uploadUrl: string;
}
