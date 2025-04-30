import { Routes, Route } from 'react-router-dom'
import LoginSignup from './components/LoginSignup'
import { useContext } from 'react'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'
import { UserContext } from './context/UserContext'
// inside App return:

function App() {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  const { user } = useContext(UserContext);

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <Routes>
        <Route
          path="*"
          element={
            songsData.length !== 0 ? (
              <>
                <div className="flex-1 flex flex-col lg:flex-row pb-28 bg-[#121212]">
                  <Sidebar />
                  <Display />
                </div>
                <Player />
              </>
            ) : null
          }
        />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      
      {/* Add the audio element */}
      <audio ref={audioRef} src={track ? track.file : ""} preload='none'></audio>
    </div>
  );
}


export default App
