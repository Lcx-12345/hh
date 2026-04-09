import { useState, useEffect } from 'react';
import { Search, Music } from 'lucide-react';
import { useMusicStore } from '@/store/musicStore';
import { TrackCard } from '@/components/TrackCard';
import { genres } from '@/data/mockData';

export default function Browse() {
  const { tracks, setSearchQuery, searchQuery, selectedGenre, setSelectedGenre } = useMusicStore();
  const [filteredTracks, setFilteredTracks] = useState(tracks);

  // Filter tracks based on search query and selected genre
  useEffect(() => {
    let result = tracks;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(track => 
        track.title.toLowerCase().includes(query) || 
        track.artist.toLowerCase().includes(query)
      );
    }
    
    // Note: In a real app, we would have genre information for each track
    // For now, we'll just show all tracks regardless of genre
    
    setFilteredTracks(result);
  }, [tracks, searchQuery, selectedGenre]);

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Browse Music</h1>
          <div className="relative w-full max-w-md mx-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search for songs, artists..."
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Genres */}
        <section className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Music className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900">Genres</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreClick(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedGenre === genre
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'All Tracks'}
          </h2>
          {filteredTracks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredTracks.map((track, index) => (
                <TrackCard key={track.id} track={track} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No tracks found</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
