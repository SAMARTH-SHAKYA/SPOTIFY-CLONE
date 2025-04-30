import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext.jsx'
import UserContextProvider from './context/UserContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
      <UserContextProvider>
          <App />
        </UserContextProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
