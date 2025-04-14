import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBook } from 'react-icons/fa';

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: '250px',
      height: '100vh',
      backgroundColor: '#040404',
      color: 'white',
      padding: '20px',
    },
    logo: {
      fontSize: '24px',
      marginBottom: '30px',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  };

  return (
    <div style={styles.sidebar}>
      <h1 style={styles.logo}>Spotify</h1>
      <div style={styles.navLinks}>
        <Link to="/home" style={styles.navLink}><FaHome /> Home</Link>
        <Link to="/search" style={styles.navLink}><FaSearch /> Search</Link>
        <Link to="/library" style={styles.navLink}><FaBook /> Library</Link>
      </div>
    </div>
  );
};

export default Sidebar;
