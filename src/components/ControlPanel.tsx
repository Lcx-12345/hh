import React from 'react';

interface ControlPanelProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onMoveDown: () => void;
  onRotate: () => void;
  onDrop: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onMoveLeft,
  onMoveRight,
  onMoveDown,
  onRotate,
  onDrop
}) => {
  return (
    <div className="flex flex-col space-y-4">
      {/* 控制说明 */}
      <div className="bg-gray-900 border-2 border-gray-700 p-4 rounded-lg">
        <h3 className="text-white text-lg font-bold mb-2">Controls</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-2">
              <span className="text-white">←</span>
            </div>
            <span className="text-gray-300">Move Left</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-2">
              <span className="text-white">→</span>
            </div>
            <span className="text-gray-300">Move Right</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-2">
              <span className="text-white">↓</span>
            </div>
            <span className="text-gray-300">Move Down</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-2">
              <span className="text-white">↑</span>
            </div>
            <span className="text-gray-300">Rotate</span>
          </div>
          <div className="flex items-center col-span-2">
            <div className="w-8 h-8 bg-gray-800 flex items-center justify-center mr-2">
              <span className="text-white">Space</span>
            </div>
            <span className="text-gray-300">Drop</span>
          </div>
        </div>
      </div>

      {/* 触摸控制按钮（移动端） */}
      <div className="md:hidden bg-gray-900 border-2 border-gray-700 p-4 rounded-lg">
        <h3 className="text-white text-lg font-bold mb-2">Touch Controls</h3>
        <div className="grid grid-cols-3 gap-2">
          <div></div>
          <button
            onClick={onRotate}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center"
          >
            ↑
          </button>
          <div></div>
          <button
            onClick={onMoveLeft}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={onMoveDown}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center"
          >
            ↓
          </button>
          <button
            onClick={onMoveRight}
            className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center"
          >
            →
          </button>
          <div className="col-span-3">
            <button
              onClick={onDrop}
              className="w-full h-12 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg flex items-center justify-center"
            >
              Drop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
