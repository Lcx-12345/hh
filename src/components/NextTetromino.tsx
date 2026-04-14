import React from 'react';
import { Tetromino } from '../types';

interface NextTetrominoProps {
  nextTetromino: Tetromino | null;
}

const NextTetromino: React.FC<NextTetrominoProps> = ({ nextTetromino }) => {
  // 渲染预览区域
  const renderPreview = () => {
    if (!nextTetromino) {
      return (
        <div className="w-32 h-32 bg-black border-2 border-gray-700 flex items-center justify-center">
          <div className="text-gray-500">No Next</div>
        </div>
      );
    }

    const { shape, color } = nextTetromino;
    const size = 8; // 每个方块的大小

    return (
      <div className="w-32 h-32 bg-black border-2 border-gray-700 flex items-center justify-center">
        <div className="flex flex-col">
          {shape.map((row, y) => (
            <div key={y} className="flex">
              {row.map((cell, x) => (
                <div
                  key={`${y}-${x}`}
                  className="w-8 h-8 border border-gray-800"
                  style={{ backgroundColor: cell ? color : 'black' }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-white text-lg font-bold mb-2">Next</h3>
      {renderPreview()}
    </div>
  );
};

export default NextTetromino;
