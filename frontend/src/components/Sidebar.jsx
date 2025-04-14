import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaBook } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-8">Spotify</h1>
      <div className="flex flex-col gap-5">
        <Link
          to="/home"
          className="flex items-center gap-3 text-lg text-white hover:text-gray-400"
        >
          <FaHome /> Home
        </Link>
        <Link
          to="/search"
          className="flex items-center gap-3 text-lg text-white hover:text-gray-400"
        >
          <FaSearch /> Search
        </Link>
        <Link
          to="/library"
          className="flex items-center gap-3 text-lg text-white hover:text-gray-400"
        >
          <FaBook /> Library
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;