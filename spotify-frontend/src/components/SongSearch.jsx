import { useState, useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import axios from "axios";
import Navbar from "./Navbar";
import Player from "./Player";

function SongSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { playWithId } = useContext(PlayerContext);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(
        `http://localhost:3000/api/song/list` // Replace with your search API endpoint
      );
      const filteredSongs = response.data.songs.filter((song) =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredSongs);
    } catch (error) {
      console.error("Error searching for songs:", error);
    }
  };

  return (
    <div className=" flex flex-col bg-[#121212] text-white pb-20 w-full">
      {/* Navbar */}
      <div className="p-5">
      <Navbar />
      </div>

      {/* Search Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Search for a Song</h2>
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter song name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white text-black p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        <div className="flex flex-col gap-4">
          {searchResults.length > 0 ? (
            searchResults.map((song) => (
              <div
                key={song._id}
                onClick={() => playWithId(song._id)}
                className="flex items-center gap-4 p-4 bg-black rounded-lg cursor-pointer hover:bg-gray-900 transition"
              >
                <img
                  src={song.image}
                  alt={song.name}
                  className="w-16 h-16 rounded-lg"
                />
                <div>
                  <p className="font-bold text-lg">{song.name}</p>
                  <p className="text-sm text-gray-400">{song.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">No songs found. Try searching for something else.</p>
          )}
        </div>
      </div>

      <Player/>
    </div>
  );
}

export default SongSearch;