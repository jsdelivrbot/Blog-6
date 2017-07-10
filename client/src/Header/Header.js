import React, { Component } from 'react';
import './Header.css';

import Icon from './Icon';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="headerContainer">
          <Icon className="Icon"/>
          <div className="location">
            <h1 className="page">Home</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
