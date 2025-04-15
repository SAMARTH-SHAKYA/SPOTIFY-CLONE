import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaVolumeUp } from 'react-icons/fa';

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black/60 text-white px-8 py-4 flex items-center justify-between border-t border-gray-700 z-50 shadow-xl">
      {/* Controls */}
      <div className="flex items-center gap-6 w-1/3">
        <button className="hover:scale-110 transition duration-200 p-2 rounded-full hover:bg-gray-700">
          <FaBackward />
        </button>

        <button
          onClick={togglePlayPause}
          className="text-2xl bg-green-500 hover:bg-green-400 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button className="hover:scale-110 transition duration-200 p-2 rounded-full hover:bg-gray-700">
          <FaForward />
        </button>
      </div>

      {/* Song Info */}
      <div className="text-center w-1/3">
        <audio ref={audioRef} className="hidden">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
        </audio>
        <p className="text-sm text-gray-300 font-medium tracking-wide">🎵 Song title — Artist</p>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3 w-1/3 justify-end">
        <FaVolumeUp />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-28 accent-green-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Player;
