export interface Track {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  url: string;
  duration: number;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  releaseDate: string;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
  createdAt: string;
}