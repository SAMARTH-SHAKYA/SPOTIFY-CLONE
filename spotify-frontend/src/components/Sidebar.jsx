import { useNavigate } from 'react-router-dom';
import { assets } from './../assets/frontend-assets/assets';

function Sidebar() {
    const navigate = useNavigate();
  
    return (
      <div className="w-full lg:w-[25%] h-full p-4 bg-[#121212] text-white flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img className="w-6" src={assets.home_icon} alt="home icon" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-6" src={assets.search_icon} alt="search icon" />
            <p className="font-bold">Search</p>
          </div>
        </div>
  
        <div className="flex flex-col gap-4 mt-8">
          <div className="p-4 bg-[#242424] rounded-lg">
            <h1 className="font-bold">Create your first playlist</h1>
            <p className="text-sm text-gray-400">It's easy, we'll help you</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
              Create Playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] rounded-lg">
            <h1 className="font-bold">Find some podcasts to follow</h1>
            <p className="text-sm text-gray-400">
              We'll keep you updated on new episodes
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-full">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Sidebar;