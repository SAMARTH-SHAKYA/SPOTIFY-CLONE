import { Routes, Route } from 'react-router-dom'
import LoginSignup from './components/LoginSignup'
import { useContext } from 'react'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'
// inside App return:

function App() {
  const { audioRef, track, songsData } = useContext(PlayerContext);
  return (
    <Routes>
  <Route path="/" element={
    songsData.length !== 0 ? (
      <>
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
      </>
    ) : null
  } />

  <Route path="/login" element={<LoginSignup />} />
</Routes>

  )
}

export default App
