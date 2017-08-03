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
  render() {
    let headerClass;
    if(this.state.dropDownIsVisible) {
      headerClass = 'stretchHeight'
    }
    return (
      <div className={"Header shadow-light " + headerClass}>
        <div className="navContainer container-m">
          <Icon onIconClick={() => this.toggle()}/>
          <div className="brandContainer">
            <a href="/">
              <h1 className="brandTitle">Illustran</h1>
            </a>
          </div>
          <Nav />
        </div>
        <DropDown />
      </div>
    );
  }
}

export default Header;
