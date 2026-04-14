import { useEffect, useCallback, useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { checkCollision, addTetrominoToBoard, clearCompletedLines, calculateDropSpeed } from '../utils/board';
import { rotateTetromino, generateTetromino } from '../utils/tetrominos';
import { Tetromino } from '../types';

export const useTetris = () => {
  const {
    board,
    currentTetromino,
    nextTetromino,
    score,
    level,
    gameOver,
    highScore,
    startGame,
    resetGame,
    moveLeft,
    moveRight,
    moveDown,
    rotate,
    drop,
    updateBoard,
    updateScore
  } = useGameStore();

  const [dropInterval, setDropInterval] = useState<number>(1000);

  // 更新下落速度
  useEffect(() => {
    const newDropSpeed = calculateDropSpeed(level);
    setDropInterval(newDropSpeed);
  }, [level]);

  // 游戏主循环
  useEffect(() => {
    if (!gameOver && currentTetromino) {
      const interval = setInterval(() => {
        handleMoveDown();
      }, dropInterval);

      return () => clearInterval(interval);
    }
  }, [gameOver, currentTetromino, dropInterval]);

  // 键盘控制
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;

      switch (e.key) {
        case 'ArrowLeft':
          handleMoveLeft();
          break;
        case 'ArrowRight':
          handleMoveRight();
          break;
        case 'ArrowDown':
          handleMoveDown();
          break;
        case 'ArrowUp':
          handleRotate();
          break;
        case ' ': // 空格键
          handleDrop();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameOver, currentTetromino, board]);

  // 处理向左移动
  const handleMoveLeft = useCallback(() => {
    if (!currentTetromino) return;

    const newPosition = { ...currentTetromino.position, x: currentTetromino.position.x - 1 };
    const newTetromino = { ...currentTetromino, position: newPosition };

    if (!checkCollision(board, newTetromino)) {
      moveLeft();
    }
  }, [currentTetromino, board, moveLeft]);

  // 处理向右移动
  const handleMoveRight = useCallback(() => {
    if (!currentTetromino) return;

    const newPosition = { ...currentTetromino.position, x: currentTetromino.position.x + 1 };
    const newTetromino = { ...currentTetromino, position: newPosition };

    if (!checkCollision(board, newTetromino)) {
      moveRight();
    }
  }, [currentTetromino, board, moveRight]);

  // 处理向下移动
  const handleMoveDown = useCallback(() => {
    if (!currentTetromino) return;

    const newPosition = { ...currentTetromino.position, y: currentTetromino.position.y + 1 };
    const newTetromino = { ...currentTetromino, position: newPosition };

    if (!checkCollision(board, newTetromino)) {
      moveDown();
    } else {
      // 方块无法继续下落，添加到棋盘
      const newBoard = addTetrominoToBoard(board, currentTetromino);
      const { board: clearedBoard, linesCleared } = clearCompletedLines(newBoard);

      // 更新分数
      if (linesCleared > 0) {
        updateScore(linesCleared);
      }

      // 生成新方块
      const newCurrentTetromino = nextTetromino;

      // 检查游戏是否结束
      if (checkCollision(clearedBoard, newCurrentTetromino)) {
        // 游戏结束
        useGameStore.getState().updateBoard(clearedBoard, null);
        useGameStore.getState().resetGame();
      } else {
        updateBoard(clearedBoard, newCurrentTetromino);
      }
    }
  }, [currentTetromino, nextTetromino, board, moveDown, updateScore, updateBoard]);

  // 处理旋转
  const handleRotate = useCallback(() => {
    if (!currentTetromino) return;

    const rotatedTetromino = rotateTetromino(currentTetromino);

    if (!checkCollision(board, rotatedTetromino)) {
      // 这里需要更新store中的currentTetromino
      useGameStore.getState().updateBoard(board, rotatedTetromino);
    }
  }, [currentTetromino, board]);

  // 处理直接下落到底部
  const handleDrop = useCallback(() => {
    if (!currentTetromino) return;

    let newPosition = { ...currentTetromino.position };
    let newTetromino = { ...currentTetromino, position: newPosition };

    // 一直下落直到碰撞
    while (!checkCollision(board, newTetromino)) {
      newPosition = { ...newPosition, y: newPosition.y + 1 };
      newTetromino = { ...currentTetromino, position: newPosition };
    }

    // 回退到最后一个有效位置
    newPosition = { ...newPosition, y: newPosition.y - 1 };
    newTetromino = { ...currentTetromino, position: newPosition };

    // 更新方块位置
    useGameStore.getState().updateBoard(board, newTetromino);

    // 立即处理下落到底部的逻辑
    handleMoveDown();
  }, [currentTetromino, board, handleMoveDown]);

  return {
    board,
    currentTetromino,
    nextTetromino,
    score,
    level,
    gameOver,
    highScore,
    startGame,
    resetGame,
    handleMoveLeft,
    handleMoveRight,
    handleMoveDown,
    handleRotate,
    handleDrop
  };
};
