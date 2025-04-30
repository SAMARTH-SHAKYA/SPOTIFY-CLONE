import { useNavigate } from 'react-router-dom';
import { assets } from './../assets/frontend-assets/assets';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-full lg:w-[25%] h-full p-4 bg-[#121212] text-white flex flex-col gap-4">
      {/* Navigation Links */}
      <div className="flex flex-col gap-4">
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home icon" />
          <p className="font-bold">Home</p>
        </div>
        <div
          onClick={() => navigate('/search')}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img className="w-6" src={assets.search_icon} alt="search icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Playlist and Podcast Section */}
      <div className="flex flex-col gap-4 mt-8">
        <div className="p-4 bg-[#242424] rounded-lg">
          <h1 className="font-bold">Create your first playlist</h1>
          <p className="text-sm text-gray-400">It's easy, we'll help you</p>
          <button
            onClick={() => navigate('/create-playlist')}
            className="mt-4 px-4 py-2 bg-white text-black rounded-full"
          >
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] rounded-lg">
          <h1 className="font-bold">Find someone to Talk</h1>
          <p className="text-sm text-gray-400">
            Chat with your friend while enjoying the song.
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="mt-4 px-4 py-2 bg-white text-black rounded-full"
          >
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;