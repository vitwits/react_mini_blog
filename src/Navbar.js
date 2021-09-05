import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1>The Dojo Dog</h1>
        <div className="links">
          <a href="/">HOME</a>
          <a href="/create">NEW BLOG</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;