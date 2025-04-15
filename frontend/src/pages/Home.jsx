import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Player from '../components/Player';
import SongCard from '../components/SongCard';
import ArtistCard from '../components/ArtistCard';


const songs = [
  {
    title: 'Pal Pal',
    artist: 'Afusic, AliSoomroMusic',
    image: 'https://i.scdn.co/image/ab67616d00001e02e3e9b5b0a9b53cfd30aa7b07',
  },
  {
    title: 'Thottu Thottu',
    artist: 'Swarnalatha, Pushpavanam',
    image: 'https://i.scdn.co/image/ab67616d00001e02d2ef623aaf99b170eeb0b81c',
  },
  {
    title: 'Nasha (Raid 2)',
    artist: 'Jasmine Sandlas, Sachet Tandon',
    image: 'https://i.scdn.co/image/ab67616d00001e02a6fd419b25f6f04ecb161e73',
  },
  {
    title: 'Superstar',
    artist: 'dox, JASKARAN, Rita Kim',
    image: 'https://i.scdn.co/image/ab67616d00001e022e3e9b5b0a9b53cfd30aa7b08',
  },
  {
    title: 'God Bless U',
    artist: 'Anirudh Ravichander, G.V',
    image: 'https://i.scdn.co/image/ab67616d00001e027f1fcf932c3f7a103be4fa13',
  },
];

const artists = [
  {
    name: 'Amit Trivedi',
    image: 'https://i.scdn.co/image/ab6761610000e5eb9cfb9284eecf20b9ff53f2c6',
  },
  {
    name: 'Arijit Singh',
    image: 'https://i.scdn.co/image/ab6761610000e5ebb75f8f2c307876fc7cdaac15',
  },
  {
    name: 'A.R. Rahman',
    image: 'https://i.scdn.co/image/ab6761610000e5eb06c05e236a858d2380c8f9eb',
  },
  {
    name: 'Neha Kakkar',
    image: 'https://i.scdn.co/image/ab6761610000e5eb9d45c1db72d05a0122b5c83c',
  },
  {
    name: 'Salim-Sulaiman',
    image: 'https://i.scdn.co/image/ab6761610000e5ebbcfd9d882f423d6d431ef7fa',
  },
];

const Home = () => {
  return (
    <div className="flex bg-[#121212] text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-1 overflow-y-auto p-6 pb-24">
          <h2 className="text-2xl font-bold mb-4">Trending Songs</h2>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {songs.map((song, index) => (
              <SongCard key={index} {...song} />
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Popular Artists</h2>
          <div className="flex gap-6 overflow-x-auto pb-2">
            {artists.map((artist, index) => (
              <ArtistCard key={index} {...artist} />
            ))}
          </div>
        </div>

        <Player />
      </div>
    </div>
  );
};

export default Home;
