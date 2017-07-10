import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <a href="/" className="footLink">Help</a>
        <a href="/" className="footLink">About</a>
        <a href="/" className="footLink">Contact</a>
      </div>
    );
  }
}

export default Footer;
