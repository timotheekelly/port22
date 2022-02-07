import React from 'react';
import { Link , useLocation } from 'react-router-dom';

import '../styles/Nav.css';



const Nav = () => {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

  return (
    <div className="nav">
        <div className="nav-left">
          <Link to="/" className='link'><h1>Tim Kelly</h1></Link>
        </div>
        <div className="nav-right">
          <Link to="/" className={splitLocation[1] === "" ? "active link right" : "link right"}>Work</Link>
          <Link to="/about" className={splitLocation[1] === "about" ? "active link right" : "link right"}>About</Link>
          <Link to="/contact" className={splitLocation[1] === "contact" ? "active link right" : "link right"}>Contact</Link>
        </div>
    </div>
  );
};

export default Nav;
