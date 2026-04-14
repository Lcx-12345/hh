import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { highScore, startGame } = useGameStore();

  const handleStartGame = () => {
    startGame();
    navigate('/game');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">Tetris</h1>
        <p className="text-gray-400 text-xl">Classic Tetris Game</p>
      </div>

      <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg max-w-md w-full">
        <div className="mb-8">
          <button
            onClick={handleStartGame}
            className="w-full bg-red-600 hover:bg-red-500 text-white text-2xl font-bold py-4 rounded-lg transition-colors duration-200"
          >
            Start Game
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">How to Play</h2>
          <div className="text-gray-300 space-y-2 text-sm">
            <p>• Use arrow keys to move the tetrominoes</p>
            <p>• Press up arrow to rotate the tetromino</p>
            <p>• Press space to drop the tetromino</p>
            <p>• Clear lines to score points</p>
            <p>• The game ends when the tetrominoes reach the top</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">High Score</h3>
          <p className="text-2xl font-bold text-yellow-400">{highScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
