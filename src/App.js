import React, { useEffect } from "react";
// import { Routes, Route } from 'react-router-dom';
// import Nav from './components/Nav';
// import Work from './pages/Work';
// import About from './pages/About';
// import Contact from './pages/Contact';

import './styles/App.css';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('G-96EQ2MWX4Y')

    ReactGA.pageview('/')
  }, [])

  return (
    <div className="main">
      <div className="title">
        <h1>Coming soon <span className="blinking">_</span></h1>
      </div>
      {/* <Nav />
      <div className="routes">
        <Routes>
          <Route path="/*" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
