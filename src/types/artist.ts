export interface SocialLinks {
  instagram?: string;
  twitter?:   string;
  facebook?:  string;
  tiktok?:    string;
}

export interface StreamingPlatformIDs {
  spotify?:    string;
  youtube?:    string;
  soundcloud?: string;
  appleMusic?: string;
}

export interface Artist {
  id:          string;
  name:        string;
  stageName:   string;
  genres:      string[];
  location:    string;
  socialLinks: SocialLinks;
  streamingIDs: StreamingPlatformIDs;
  featured:    boolean;
  unreleased:  boolean;
  bio?:        string;
  imageUrl?:   string;
  releaseDate?: string;
}
