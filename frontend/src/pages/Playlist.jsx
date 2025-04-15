import React, { useState } from 'react';

const Playlist = () => {
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [songs, setSongs] = useState({});

  const handleCreate = () => {
    if (playlistName) {
      setPlaylists([...playlists, playlistName]);
      setSongs({ ...songs, [playlistName]: [] });
      setPlaylistName('');
    }
  };

  const handleAddSong = (playlist, songName) => {
    const updated = { ...songs };
    updated[playlist].push(songName);
    setSongs(updated);
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="New Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="px-4 py-2 rounded bg-gray-700 text-white"
        />
        <button onClick={handleCreate} className="bg-green-500 px-4 py-2 rounded">
          Create
        </button>
      </div>

      {playlists.map((pl, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{pl}</h3>
          <input
            type="text"
            placeholder="Add song name"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddSong(pl, e.target.value);
            }}
            className="px-2 py-1 bg-gray-800 text-white mt-2"
          />
          <ul className="ml-4 list-disc">
            {(songs[pl] || []).map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
