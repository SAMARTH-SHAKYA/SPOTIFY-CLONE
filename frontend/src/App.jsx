import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* 👈 Root route now shows Home */}
      </Routes>
    </Router>
  );
};

export default App;
