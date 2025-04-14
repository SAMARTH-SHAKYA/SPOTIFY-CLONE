import React from 'react';
import { FaUserCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-gray-900 text-white">
      <div className="flex items-center gap-4">
        <button className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700">
          <FaChevronLeft />
        </button>
        <button className="bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700">
          <FaChevronRight />
        </button>
      </div>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <FaUserCircle size={28} />
      </div>
    </div>
  );
};

export default Navbar;