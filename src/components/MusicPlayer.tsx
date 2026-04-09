import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useMusicStore } from '@/store/musicStore';

export function MusicPlayer() {
  const { currentTrack, isPlaying, volume, playTrack, pauseTrack, setVolume } = useMusicStore();

  if (!currentTrack) {
    return null;
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      playTrack(currentTrack);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-3 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Track Info */}
        <div className="flex items-center space-x-3">
          <img 
            src={currentTrack.artwork} 
            alt={currentTrack.title} 
            className="w-12 h-12 rounded-md object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm text-gray-900">{currentTrack.title}</h3>
            <p className="text-xs text-gray-500">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center space-x-2">
          {volume > 0 ? (
            <Volume2 className="w-5 h-5 text-gray-600" />
          ) : (
            <VolumeX className="w-5 h-5 text-gray-600" />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
}
