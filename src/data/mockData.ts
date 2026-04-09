import { Track, Artist, Album, Playlist } from '@/types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: 'John Doe',
    artwork: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop',
    url: 'https://example.com/song1.mp3',
    duration: 180
  },
  {
    id: '2',
    title: 'Midnight Dreams',
    artist: 'Sarah Smith',
    artwork: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    url: 'https://example.com/song2.mp3',
    duration: 220
  },
  {
    id: '3',
    title: 'Electric Nights',
    artist: 'DJ Pulse',
    artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    url: 'https://example.com/song3.mp3',
    duration: 195
  },
  {
    id: '4',
    title: 'Acoustic Breeze',
    artist: 'The Wanderers',
    artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    url: 'https://example.com/song4.mp3',
    duration: 240
  },
  {
    id: '5',
    title: 'Jazz Café',
    artist: 'Miles Blue',
    artwork: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop',
    url: 'https://example.com/song5.mp3',
    duration: 260
  },
  {
    id: '6',
    title: 'Rock Anthem',
    artist: 'Thunder Strike',
    artwork: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    url: 'https://example.com/song6.mp3',
    duration: 210
  }
];

export const mockArtists: Artist[] = [
  {
    id: '1',
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    bio: 'An amazing artist with unique style'
  },
  {
    id: '2',
    name: 'Sarah Smith',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    bio: 'Soulful vocals and heartfelt lyrics'
  },
  {
    id: '3',
    name: 'DJ Pulse',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    bio: 'Electronic beats that make you move'
  },
  {
    id: '4',
    name: 'The Wanderers',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop',
    bio: 'Acoustic folk with a modern twist'
  },
  {
    id: '5',
    name: 'Miles Blue',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop',
    bio: 'Smooth jazz for any occasion'
  },
  {
    id: '6',
    name: 'Thunder Strike',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=200&h=200&fit=crop',
    bio: 'Hard rock that shakes the foundations'
  }
];

export const mockAlbums: Album[] = [
  {
    id: '1',
    title: 'Summer Collection',
    artist: 'John Doe',
    artwork: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop',
    releaseDate: '2024-01-01',
    tracks: [mockTracks[0]]
  },
  {
    id: '2',
    title: 'Night Sessions',
    artist: 'Sarah Smith',
    artwork: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop',
    releaseDate: '2024-02-15',
    tracks: [mockTracks[1]]
  },
  {
    id: '3',
    title: 'Electric Pulse',
    artist: 'DJ Pulse',
    artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    releaseDate: '2024-03-20',
    tracks: [mockTracks[2]]
  },
  {
    id: '4',
    title: 'Acoustic Journey',
    artist: 'The Wanderers',
    artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    releaseDate: '2024-04-10',
    tracks: [mockTracks[3]]
  },
  {
    id: '5',
    title: 'Blue Notes',
    artist: 'Miles Blue',
    artwork: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&h=300&fit=crop',
    releaseDate: '2024-05-05',
    tracks: [mockTracks[4]]
  },
  {
    id: '6',
    title: 'Thunder Road',
    artist: 'Thunder Strike',
    artwork: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
    releaseDate: '2024-06-01',
    tracks: [mockTracks[5]]
  }
];

export const mockPlaylists: Playlist[] = [
  {
    id: '1',
    name: 'My Favorites',
    tracks: mockTracks,
    createdAt: '2024-03-01'
  },
  {
    id: '2',
    name: 'Workout Mix',
    tracks: [mockTracks[0], mockTracks[2], mockTracks[5]],
    createdAt: '2024-03-15'
  },
  {
    id: '3',
    name: 'Chill Vibes',
    tracks: [mockTracks[1], mockTracks[3], mockTracks[4]],
    createdAt: '2024-04-01'
  }
];

export const genres = ['Pop', 'Rock', 'Jazz', 'Hip Hop', 'Classical', 'Electronic'];