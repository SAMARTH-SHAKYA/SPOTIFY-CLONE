import React from 'react';

const SongCard = ({ image, title, artist }) => {
  return (
    <div className="w-44 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 hover:scale-105 transition duration-300 shadow-md cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-44 rounded-md object-cover mb-3"
      />
      <h4 className="text-white text-sm font-semibold truncate">{title}</h4>
      <p className="text-gray-400 text-xs truncate">{artist}</p>
    </div>
  );
};

export default SongCard;
