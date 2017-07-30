import React from 'react';
import './DropDown.css';

const DropDown = () => {
  return (
    <div className="DropDown">
      <div className="linkContainer contained-s">
        <a href="/about">
          <h3>About</h3>
        </a>
        <hr/>
        <a href="/contact">
          <h3>Contact</h3></a>
        <hr/>
      </div>
    </div>
  )
}

export default DropDown;
