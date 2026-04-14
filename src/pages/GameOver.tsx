import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGameStore } from '../store/gameStore';

const GameOver: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { highScore, startGame } = useGameStore();
  const score = location.state?.score || 0;

  const handlePlayAgain = () => {
    startGame();
    navigate('/game');
  };

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-gray-700 p-8 rounded-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Game Over</h1>
        <div className="mb-6">
          <p className="text-gray-400">Your Score</p>
          <p className="text-3xl font-bold text-white mb-2">{score}</p>
          <p className="text-gray-400">High Score</p>
          <p className="text-2xl font-bold text-yellow-400">{highScore}</p>
        </div>
        <div className="flex flex-col space-y-3">
          <button
            onClick={handlePlayAgain}
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            Play Again
          </button>
          <button
            onClick={handleBackHome}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
