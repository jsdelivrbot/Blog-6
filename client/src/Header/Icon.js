import React from 'react';
import './Icon.css';

let display = '';
const Icon = ({onIconClick}) => {
  const onClick = () => {
    if(display) {
      display = '';
    } else {
      display = 'none';
    }
    onIconClick();
  }
  return (
    <div className="Icon" onClick={() => onClick()}>
      <div id="top" className="bar"></div>
      <div id="middle" className={"bar " + display}></div>
      <div id="bottom" className="bar"></div>
    </div>
  )
}

export default Icon;
