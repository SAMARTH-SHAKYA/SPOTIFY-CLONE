import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/frontend-assets/assets';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    // Clear user data from localStorage and context
    localStorage.removeItem('user');
    setUser(null);

    // Redirect to login page
    navigate('/login');
  };

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_right"
          />
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              {/* Profile Icon */}
              <div className="bg-sky-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              {/* User Name */}
              <p className="text-white">{user.name}</p>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded-xl text-sm shadow-md hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-4 py-1 rounded-xl text-sm shadow-md hover:bg-white/20 transition duration-300"
            >
              Login / Signup
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
      </div>
    </>
  );
}

export default Navbar;