import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const url = "http://localhost:3000";

  const audioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(null);
  const [playStatus, setPlayStatus] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [originalSongsData, setOriginalSongsData] = useState([]);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      setIsMuted(!isMuted);
      if (!isMuted) {
        audioRef.current.volume = 0;
        setVolume(0);
      } else {
        audioRef.current.volume = 0.5;
        setVolume(0.5);
      }
    }
  };

  const toggleLoop = () => {
    if (audioRef.current) {
      setIsLooping(!isLooping);
      audioRef.current.loop = !isLooping;
    }
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.ontimeupdate = () => {
        if (audioRef.current && seekBar.current && seekBg.current) {
          seekBar.current.style.width =
            Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60),
            },
          });
        }
      };
    }
  }, [audioRef]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = async (id) => {
    const selectedTrack = songsData.find((item) => item._id === id);
    if (selectedTrack) {
      setTrack(selectedTrack);
      if (audioRef.current) {
        audioRef.current.play();
        setPlayStatus(true);
      }
    }
  };

  const previusSong = () => {
    const currentIndex = songsData.findIndex((item) => item._id === track?._id);
    if (currentIndex > 0) {
      setTrack(songsData[currentIndex - 1]);
      if (audioRef.current) {
        audioRef.current.play();
        setPlayStatus(true);
      }
    }
  };

  const nextSong = () => {
    const currentIndex = songsData.findIndex((item) => item._id === track?._id);
    if (currentIndex < songsData.length - 1) {
      setTrack(songsData[currentIndex + 1]);
      if (audioRef.current) {
        audioRef.current.play();
        setPlayStatus(true);
      }
    }
  };

  const seekSong = (e) => {
    if (audioRef.current && seekBg.current) {
      audioRef.current.currentTime =
        (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
    }
  };

  const getSongsData = async () => {
    try {
      const response = await axios.get(`${url}/api/song/list`);
      setSongsData(response.data.songs);
      setTrack(response.data.songs[0]);
      setOriginalSongsData(response.data.songs);
    } catch (error) {
      console.log("error getSongsData", error);
    }
  };

  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      setAlbumsData(response.data.albums);
    } catch (error) {
      console.log("error getAlbumsData", error);
    }
  };

  useEffect(() => {
    getAlbumsData();
    getSongsData();
  }, []);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previusSong,
    nextSong,
    seekSong,
    songsData,
    albumsData,
    isLooping,
    toggleLoop,
    isShuffle,
    toggleShuffle,
    volume,
    handleVolumeChange,
    isMuted,
    toggleMute,
  };

  return <PlayerContext.Provider value={contextValue}>{props.children}</PlayerContext.Provider>;
};

export default PlayerContextProvider;