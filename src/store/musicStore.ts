import { create } from 'zustand';
import { Track, Artist, Album, Playlist } from '@/types';

interface MusicStore {
  // 状态
  currentTrack: Track | null;
  isPlaying: boolean;
  volume: number;
  tracks: Track[];
  artists: Artist[];
  albums: Album[];
  playlists: Playlist[];
  searchQuery: string;
  selectedGenre: string;

  // 动作
  playTrack: (track: Track) => void;
  pauseTrack: () => void;
  setVolume: (volume: number) => void;
  setSearchQuery: (query: string) => void;
  setSelectedGenre: (genre: string) => void;
  setState: (state: Partial<MusicStore>) => void;
  getState: () => MusicStore;
}

export const useMusicStore = create<MusicStore>((set, get) => ({
  // 初始状态
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  tracks: [],
  artists: [],
  albums: [],
  playlists: [],
  searchQuery: '',
  selectedGenre: '',

  // 动作实现
  playTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  pauseTrack: () => set({ isPlaying: false }),
  setVolume: (volume) => set({ volume }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
  setState: (state) => set(state),
  getState: () => get()
}));