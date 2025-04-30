import { useContext } from 'react';
import { assets } from './../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { assets } from '../assets/assets';

const Player = () => {
  const {
    audioRef,
    seekBar,
    seekBg,
    track,
    playStatus,
    play,
    pause,
    nextSong,
    previusSong,
    volume,
    handleVolumeChange,
    isMuted,
    toggleMute,
    time
  } = useContext(PlayerContext);

  return (
    <div className="fixed bottom-0 w-full bg-[#181818] p-4 z-50 text-white">
      <audio ref={audioRef} src={track?.song_url} />

      {/* Track Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={track?.thumbnail} alt="track" className="w-12 h-12 rounded" />
          <div>
            <p className="font-semibold">{track?.name}</p>
            <p className="text-sm text-gray-400">{track?.desc}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
            <button onClick={previusSong}><img src={assets.prev_icon} className="w-5" /></button>
            <button onClick={playStatus ? pause : play}>
              <img src={playStatus ? assets.pause_icon : assets.play_icon} className="w-6" />
            </button>
            <button onClick={nextSong}><img src={assets.next_icon} className="w-5" /></button>
          </div>

          {/* Progress Bar */}
          <div ref={seekBg} onClick={(e) => seekSong(e)} className="h-1 bg-gray-700 w-96 mt-2 relative cursor-pointer">
            <div ref={seekBar} className="h-full bg-white absolute top-0 left-0"></div>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {time.currentTime.minute}:{time.currentTime.second.toString().padStart(2, '0')} / 
            {time.totalTime.minute}:{time.totalTime.second.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <button onClick={toggleMute}>
            <img src={isMuted ? assets.volume_mute_icon : assets.volume_icon} className="w-5" />
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={handleVolumeChange}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
