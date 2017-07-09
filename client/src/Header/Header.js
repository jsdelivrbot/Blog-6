import React, { Component } from 'react';
import './Header.css';

import Icon from './Icon';

class Header extends Component {
  render() {
    return (
      <div className="Header contain">
          <Icon className="Icon"/>
          <div className="location">
            <h1>Home</h1>
          </div>
      </div>
    );
  }
}

export default Header;
