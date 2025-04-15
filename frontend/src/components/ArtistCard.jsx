import React from 'react';

const ArtistCard = ({ image, name }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl w-32 text-center hover:bg-gray-700 hover:scale-105 transition duration-300 shadow-md cursor-pointer">
      <img
        src={image}
        alt={name}
        className="rounded-full w-20 h-20 object-cover mx-auto mb-2"
      />
      <p className="text-white text-sm font-medium truncate">{name}</p>
    </div>
  );
};

export default ArtistCard;
