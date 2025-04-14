import React from 'react';
import { FaUserCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 20px',
      backgroundColor: '#1a1a1a',
      color: 'white',
    },
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    navRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    iconButton: {
      backgroundColor: '#121212',
      border: 'none',
      color: 'white',
      fontSize: '18px',
      padding: '8px',
      borderRadius: '50%',
      cursor: 'pointer',
    },
    searchInput: {
      backgroundColor: '#333',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '20px',
      color: 'white',
      width: '250px',
    },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.navLeft}>
        <button style={styles.iconButton}><FaChevronLeft /></button>
        <button style={styles.iconButton}><FaChevronRight /></button>
      </div>
      <div style={styles.navRight}>
        <input type="text" placeholder="Search..." style={styles.searchInput} />
        <FaUserCircle size={28} />
      </div>
    </div>
  );
};

export default Navbar;
