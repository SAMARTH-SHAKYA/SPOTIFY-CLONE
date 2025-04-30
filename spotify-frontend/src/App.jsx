import { Routes, Route } from 'react-router-dom'
import LoginSignup from './components/LoginSignup'

// inside App return:
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
