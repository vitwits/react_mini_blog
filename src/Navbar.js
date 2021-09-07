import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>The Dojo Dog</h1>
        <div className="links">
          <Link to="/">HOME</Link>
          <Link to="/create">NEW BLOG</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;