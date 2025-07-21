import { Track, Artist, Album, Playlist } from '@/types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: 'John Doe',
    artwork: 'https://picsum.photos/200',
    url: 'https://example.com/song1.mp3',
    duration: 180
  },
  // 添加更多模拟曲目...
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'John Doe',
    image: 'https://picsum.photos/200',
    bio: 'An amazing artist with unique style'
  },
  // 添加更多模拟艺术家...
];

export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'Summer Collection',
    artist: 'John Doe',
    artwork: 'https://picsum.photos/200',
    releaseDate: '2024-01-01',
    tracks: mockTracks
  },
  // 添加更多模拟专辑...
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'My Favorites',
    tracks: mockTracks,
    createdAt: '2024-03-01'
  },
  // 添加更多模拟播放列表...
];

export const genres = ['Pop', 'Rock', 'Jazz', 'Hip Hop', 'Classical', 'Electronic'];