import React from 'react';

interface ScoreDisplayProps {
  score: number;
  level: number;
  highScore: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, level, highScore }) => {
  return (
    <div className="bg-gray-900 border-2 border-gray-700 p-4 rounded-lg">
      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-gray-400 text-sm">Score</h3>
          <p className="text-white text-2xl font-bold">{score}</p>
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">Level</h3>
          <p className="text-white text-2xl font-bold">{level}</p>
        </div>
        <div>
          <h3 className="text-gray-400 text-sm">High Score</h3>
          <p className="text-yellow-400 text-2xl font-bold">{highScore}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreDisplay;
