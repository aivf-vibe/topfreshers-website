

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import WebDevelopment from './WebDevelopment';
import UXDesign from './UXDesign';
import Algorithms from './Algorithms';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ux-design" element={<UXDesign />} />
        <Route path="/algorithms-data-structures" element={<Algorithms />} />
      </Routes>
    </Router>
  );
}

export default App;

