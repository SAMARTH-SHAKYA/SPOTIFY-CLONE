import React from 'react';
import { Link } from 'react-router-dom';

import { FaHome, FaSearch, FaMusic } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white p-6 space-y-6">
      <div className="text-2xl font-bold mb-8">🎵 Spotify Clone</div>

      <nav className="flex flex-col space-y-4">
        <Link to="/" className="flex items-center gap-3 hover:text-green-400">
          <FaHome /> Home
        </Link>

        <Link to="/playlist" className="flex items-center gap-3 hover:text-green-400">
          <FaMusic /> Playlist
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
