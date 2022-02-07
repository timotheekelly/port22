import React from "react";
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

import './styles/App.css';

function App() {
  return (
    <div className="main">
      <Nav />
      <div className="routes">
        <Routes>
          <Route path="/*" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
