import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Player from '../components/Player.jsx';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
    },
    main: {
      flex: 1,
      backgroundColor: '#121212',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      marginBottom: '80px', // give space above the player
    },
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.main}>
        <Navbar />
        <div style={styles.content}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>
            Welcome to Spotify Clone
          </h2>
          {/* Add cards or playlists later here */}
        </div>
        <Player />
      </div>
    </div>
  );
};

export default Home;
