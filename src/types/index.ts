export interface Track {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  url: string;
  duration: number;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  releaseDate: string;
  tracks: Track[];
}

export interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
  createdAt: string;
}

// 方块类型定义
export type TetrominoType = 'I' | 'J' | 'L' | 'O' | 'S' | 'T' | 'Z';

// 方块接口
export interface Tetromino {
  type: TetrominoType;
  shape: number[][];
  color: string;
  position: { x: number; y: number };
}

// 游戏状态接口
export interface GameState {
  board: number[][];
  currentTetromino: Tetromino | null;
  nextTetromino: Tetromino | null;
  score: number;
  level: number;
  linesCleared: number;
  gameOver: boolean;
  highScore: number;
}

// 游戏动作类型
export type GameAction =
  | { type: 'MOVE_LEFT' }
  | { type: 'MOVE_RIGHT' }
  | { type: 'MOVE_DOWN' }
  | { type: 'ROTATE' }
  | { type: 'DROP' }
  | { type: 'START_GAME' }
  | { type: 'RESET_GAME' }
  | { type: 'UPDATE_BOARD' };
