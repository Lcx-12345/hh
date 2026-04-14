import { Tetromino, TetrominoType } from '../types';

// 方块形状定义
const TETROMINOS: Record<TetrominoType, { shape: number[][]; color: string }> = {
  I: {
    shape: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    color: '#00bcd4'
  },
  J: {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#2196f3'
  },
  L: {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#ff9800'
  },
  O: {
    shape: [
      [1, 1],
      [1, 1]
    ],
    color: '#ffeb3b'
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: '#4caf50'
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    color: '#9c27b0'
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: '#f44336'
  }
};

// 生成随机方块
export const generateTetromino = (): Tetromino => {
  const types = Object.keys(TETROMINOS) as TetrominoType[];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const tetromino = TETROMINOS[randomType];
  
  return {
    type: randomType,
    shape: tetromino.shape,
    color: tetromino.color,
    position: { x: 3, y: 0 }
  };
};

// 旋转方块
export const rotateTetromino = (tetromino: Tetromino): Tetromino => {
  const rotatedShape = tetromino.shape[0].map((_, index) =>
    tetromino.shape.map(row => row[index]).reverse()
  );
  
  return {
    ...tetromino,
    shape: rotatedShape
  };
};
