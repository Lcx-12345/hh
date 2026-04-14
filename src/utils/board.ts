import { Tetromino } from '../types';

// 棋盘尺寸
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

// 初始化棋盘
export const initializeBoard = (): number[][] => {
  return Array(BOARD_HEIGHT).fill(0).map(() => Array(BOARD_WIDTH).fill(0));
};

// 检查碰撞
export const checkCollision = (
  board: number[][],
  tetromino: Tetromino
): boolean => {
  for (let y = 0; y < tetromino.shape.length; y++) {
    for (let x = 0; x < tetromino.shape[y].length; x++) {
      // 检查方块是否有方块
      if (tetromino.shape[y][x] !== 0) {
        const boardX = tetromino.position.x + x;
        const boardY = tetromino.position.y + y;
        
        // 检查是否超出边界
        if (
          boardX < 0 ||
          boardX >= BOARD_WIDTH ||
          boardY >= BOARD_HEIGHT
        ) {
          return true;
        }
        
        // 检查是否与已放置的方块碰撞
        if (boardY >= 0 && board[boardY][boardX] !== 0) {
          return true;
        }
      }
    }
  }
  
  return false;
};

// 将方块添加到棋盘
export const addTetrominoToBoard = (
  board: number[][],
  tetromino: Tetromino
): number[][] => {
  const newBoard = board.map(row => [...row]);
  
  for (let y = 0; y < tetromino.shape.length; y++) {
    for (let x = 0; x < tetromino.shape[y].length; x++) {
      if (tetromino.shape[y][x] !== 0) {
        const boardX = tetromino.position.x + x;
        const boardY = tetromino.position.y + y;
        
        if (boardY >= 0 && boardY < BOARD_HEIGHT && boardX >= 0 && boardX < BOARD_WIDTH) {
          newBoard[boardY][boardX] = 1;
        }
      }
    }
  }
  
  return newBoard;
};

// 清除完整的行
export const clearCompletedLines = (board: number[][]): { board: number[][]; linesCleared: number } => {
  const newBoard = board.filter(row => !row.every(cell => cell !== 0));
  const linesCleared = BOARD_HEIGHT - newBoard.length;
  
  // 在顶部添加新的空行
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(0));
  }
  
  return { board: newBoard, linesCleared };
};

// 计算分数
export const calculateScore = (linesCleared: number, level: number): number => {
  if (linesCleared === 0) return 0;
  
  // 基础分数
  const baseScores = {
    1: 100,
    2: 300,
    3: 500,
    4: 800
  };
  
  return baseScores[linesCleared as keyof typeof baseScores] * (level + 1);
};

// 计算级别
export const calculateLevel = (linesCleared: number): number => {
  return Math.floor(linesCleared / 10);
};

// 计算下落速度
export const calculateDropSpeed = (level: number): number => {
  // 基础速度为1000ms，每级减少50ms，最低为100ms
  return Math.max(100, 1000 - (level * 50));
};
