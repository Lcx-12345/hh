import React from 'react';
import { Tetromino } from '../types';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../utils/board';

interface TetrisBoardProps {
  board: number[][];
  currentTetromino: Tetromino | null;
}

const TetrisBoard: React.FC<TetrisBoardProps> = ({ board, currentTetromino }) => {
  // 渲染单个方块
  const renderCell = (y: number, x: number) => {
    // 检查当前方块是否覆盖此位置
    if (currentTetromino) {
      for (let ty = 0; ty < currentTetromino.shape.length; ty++) {
        for (let tx = 0; tx < currentTetromino.shape[ty].length; tx++) {
          if (
            currentTetromino.shape[ty][tx] !== 0 &&
            currentTetromino.position.y + ty === y &&
            currentTetromino.position.x + tx === x
          ) {
            return (
              <div
                key={`${y}-${x}`}
                className="w-8 h-8 border border-gray-700"
                style={{ backgroundColor: currentTetromino.color }}
              />
            );
          }
        }
      }
    }

    // 检查棋盘上是否有方块
    if (board[y][x] !== 0) {
      // 这里我们使用一个默认颜色，实际应该从存储的方块数据中获取颜色
      return (
        <div
          key={`${y}-${x}`}
          className="w-8 h-8 border border-gray-700"
          style={{ backgroundColor: '#333333' }}
        />
      );
    }

    // 空单元格
    return (
      <div
        key={`${y}-${x}`}
        className="w-8 h-8 border border-gray-800 bg-black"
      />
    );
  };

  return (
    <div className="flex flex-col bg-black border-2 border-gray-700">
      {Array.from({ length: BOARD_HEIGHT }, (_, y) => (
        <div key={y} className="flex">
          {Array.from({ length: BOARD_WIDTH }, (_, x) => renderCell(y, x))}
        </div>
      ))}
    </div>
  );
};

export default TetrisBoard;
