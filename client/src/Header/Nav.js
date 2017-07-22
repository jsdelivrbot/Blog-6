import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="separator"></div>
      <a className="navLinks" href="/">
        <h4>About</h4>
      </a>
      <div className="separator"></div>
      <a className="navLinks" href="/">
        <h4>Contact</h4>
      </a>
    </div>
  )
}

export default Nav;