import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState, Tetromino } from '../types';
import { initializeBoard } from '../utils/board';
import { generateTetromino } from '../utils/tetrominos';

interface GameStore extends GameState {
  startGame: () => void;
  resetGame: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  rotate: () => void;
  drop: () => void;
  updateBoard: (newBoard: number[][], newTetromino: Tetromino | null) => void;
  updateScore: (linesCleared: number) => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set, get) => ({
      // 初始状态
      board: initializeBoard(),
      currentTetromino: null,
      nextTetromino: generateTetromino(),
      score: 0,
      level: 0,
      linesCleared: 0,
      gameOver: false,
      highScore: 0,

      // 开始游戏
      startGame: () => {
        set({
          board: initializeBoard(),
          currentTetromino: generateTetromino(),
          nextTetromino: generateTetromino(),
          score: 0,
          level: 0,
          linesCleared: 0,
          gameOver: false
        });
      },

      // 重置游戏
      resetGame: () => {
        set({
          board: initializeBoard(),
          currentTetromino: null,
          nextTetromino: generateTetromino(),
          score: 0,
          level: 0,
          linesCleared: 0,
          gameOver: false
        });
      },

      // 向左移动
      moveLeft: () => {
        const { currentTetromino, board, gameOver } = get();
        if (!currentTetromino || gameOver) return;

        const newPosition = { ...currentTetromino.position, x: currentTetromino.position.x - 1 };
        const newTetromino = { ...currentTetromino, position: newPosition };

        // 这里的碰撞检测会在useTetris hook中处理
        set({ currentTetromino: newTetromino });
      },

      // 向右移动
      moveRight: () => {
        const { currentTetromino, gameOver } = get();
        if (!currentTetromino || gameOver) return;

        const newPosition = { ...currentTetromino.position, x: currentTetromino.position.x + 1 };
        const newTetromino = { ...currentTetromino, position: newPosition };

        set({ currentTetromino: newTetromino });
      },

      // 向下移动
      moveDown: () => {
        const { currentTetromino, gameOver } = get();
        if (!currentTetromino || gameOver) return;

        const newPosition = { ...currentTetromino.position, y: currentTetromino.position.y + 1 };
        const newTetromino = { ...currentTetromino, position: newPosition };

        set({ currentTetromino: newTetromino });
      },

      // 旋转
      rotate: () => {
        const { currentTetromino, gameOver } = get();
        if (!currentTetromino || gameOver) return;

        // 旋转逻辑会在useTetris hook中处理
        set({ currentTetromino: currentTetromino });
      },

      // 直接下落到底部
      drop: () => {
        const { currentTetromino, gameOver } = get();
        if (!currentTetromino || gameOver) return;

        // 下落逻辑会在useTetris hook中处理
        set({ currentTetromino: currentTetromino });
      },

      // 更新棋盘
      updateBoard: (newBoard, newTetromino) => {
        set({
          board: newBoard,
          currentTetromino: newTetromino,
          nextTetromino: newTetromino ? generateTetromino() : get().nextTetromino
        });
      },

      // 更新分数
      updateScore: (linesCleared) => {
        const { score, level } = get();
        const newScore = score + (linesCleared * 100 * (level + 1));
        const newLinesCleared = get().linesCleared + linesCleared;
        const newLevel = Math.floor(newLinesCleared / 10);
        const highScore = Math.max(get().highScore, newScore);

        set({
          score: newScore,
          linesCleared: newLinesCleared,
          level: newLevel,
          highScore: highScore
        });
      }
    }),
    {
      name: 'tetris-game-storage',
      partialize: (state) => ({ highScore: state.highScore })
    }
  )
);
