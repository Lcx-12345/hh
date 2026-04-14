import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TetrisBoard from '../components/TetrisBoard';
import NextTetromino from '../components/NextTetromino';
import ScoreDisplay from '../components/ScoreDisplay';
import ControlPanel from '../components/ControlPanel';
import { useTetris } from '../hooks/useTetris';

const Game: React.FC = () => {
  const navigate = useNavigate();
  const {
    board,
    currentTetromino,
    nextTetromino,
    score,
    level,
    gameOver,
    highScore,
    startGame,
    handleMoveLeft,
    handleMoveRight,
    handleMoveDown,
    handleRotate,
    handleDrop
  } = useTetris();

  // 游戏开始
  useEffect(() => {
    startGame();
  }, [startGame]);

  // 游戏结束后导航到游戏结束页面
  useEffect(() => {
    if (gameOver) {
      navigate('/gameover', { state: { score } });
    }
  }, [gameOver, navigate, score]);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">Tetris</h1>
        <p className="text-gray-400">Classic Tetris Game</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 游戏区域 */}
        <div className="flex flex-col items-center">
          <TetrisBoard board={board} currentTetromino={currentTetromino} />
          <div className="mt-4">
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Back to Home
            </button>
          </div>
        </div>

        {/* 游戏信息和控制 */}
        <div className="flex flex-col gap-6">
          <ScoreDisplay score={score} level={level} highScore={highScore} />
          <NextTetromino nextTetromino={nextTetromino} />
          <ControlPanel
            onMoveLeft={handleMoveLeft}
            onMoveRight={handleMoveRight}
            onMoveDown={handleMoveDown}
            onRotate={handleRotate}
            onDrop={handleDrop}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
