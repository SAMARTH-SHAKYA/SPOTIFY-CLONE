import React from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from 'react-icons/fa';

const Player = () => {
  const styles = {
    player: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '80px',
      backgroundColor: '#181818',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px',
      zIndex: 100,
    },
    songInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    controls: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
    },
    progressBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '4px',
      backgroundColor: '#444',
    },
    progress: {
      height: '100%',
      width: '40%',
      backgroundColor: '#1DB954',
    },
  };

  return (
    <div style={styles.player}>
      <div style={styles.songInfo}>
        <strong>Track Name</strong>
        <small>Artist Name</small>
      </div>
      <div style={styles.controls}>
        <FaStepBackward />
        <FaPlay />
        <FaStepForward />
      </div>
      <div style={styles.progressBar}>
        <div style={styles.progress}></div>
      </div>
    </div>
  );
};

export default Player;
