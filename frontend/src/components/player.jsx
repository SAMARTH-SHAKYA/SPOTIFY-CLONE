import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const Player = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-gray-900 text-white flex items-center justify-between px-8 z-50">
      <div className="flex flex-col">
        <strong className="text-sm">Track Name</strong>
        <small className="text-xs text-gray-400">Artist Name</small>
      </div>
      <div className="flex items-center gap-5">
        <FaStepBackward className="cursor-pointer hover:text-gray-400" />
        <FaPlay className="cursor-pointer hover:text-gray-400" />
        <FaStepForward className="cursor-pointer hover:text-gray-400" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
        <div className="h-full w-2/5 bg-green-500"></div>
      </div>
    </div>
  );
};

export default Player;