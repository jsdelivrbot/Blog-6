import React from 'react';
import './Icon.css';

const Icon = ({onIconClick}) => {
  return (
    <div className="Icon" onClick={onIconClick}>
      <div id="top" className="bar"></div>
      <div id="middle" className="bar"></div>
      <div id="bottom" className="bar"></div>
    </div>
  )
}

export default Icon;
