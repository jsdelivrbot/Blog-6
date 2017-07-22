import React, { Component } from 'react';
import './Header.css';
import './Header-M.css';

import Icon from './Icon';
import DropDown from './DropDown';
import Nav from './Nav';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDownIsVisible: false }
  }
  toggle() {
    this.setState({ dropDownIsVisible: !this.state.dropDownIsVisible })
  }
  showDropDown() {
    return this.state.dropDownIsVisible ? <DropDown /> : null;
  }
  render() {
    return (
      <div className="Header shadow-light">
        <div className="contained-s contained-m">
          <Icon onIconClick={() => this.toggle()}/>
          <a className="brandContainer" href="/">
            <h1 className="brandTitle">Illustran</h1>
          </a>
          <Nav />
        </div>
        {this.showDropDown()}
      </div>
    );
  }
}

export default Header;
