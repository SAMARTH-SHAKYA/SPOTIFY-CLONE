import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Navbar from '../components/Navbar.jsx';
import Player from '../components/Player.jsx';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-900 text-white h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 p-5 overflow-y-auto mb-20">
          <h2 className="text-2xl font-bold">Welcome to Spotify Clone</h2>
          {/* Add cards or playlists later here */}
        </div>
        <Player />
      </div>
    </div>
  );
};

export default Home;