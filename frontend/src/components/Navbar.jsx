import React, { useState } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import LoginModal from './ui/LoginModal';
import SignupModal from './ui/SignupModal';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-[#121212] border-b border-gray-800">
        <div className="flex items-center gap-4 text-white text-xl font-semibold">
          <FaHome />
          <span>Home</span>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-xl relative">
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <div className="text-white flex gap-4 items-center">
          <button className="hover:underline">Premium</button>
          <button className="hover:underline">Support</button>
          <button className="hover:underline">Download</button>
          <button
            onClick={() => setShowLogin(true)}
            className="bg-white text-black px-4 py-1 rounded-full font-semibold hover:scale-105 transition"
          >
            Log in
          </button>
          <button
            onClick={() => setShowSignup(true)}
            className="border px-4 py-1 rounded-full font-semibold border-white hover:scale-105 transition"
          >
            Sign up
          </button>
        </div>
      </div>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
};

export default Navbar;
