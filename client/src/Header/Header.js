import React, { Component } from 'react';
import './Header.css';
import './Header-D.css';

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
      <div className="Header">
        <div className="contained-m contained-d">
          <Icon onIconClick={() => this.toggle()}/>
          <a className="brand" href="/">
            <h1 className="brandTitle">Illustran</h1>
          </a>
          <div className="nav">
            <div className="separator"></div>
            <a className="navLinks" href="/">
              <h4>About</h4>
            </a>
            <div className="separator"></div>
            <a className="navLinks" href="/">
              <h4>Contact</h4>
            </a>
          </div>
        </div>
        {this.showDropDown()}
      </div>
    );
  }
}

const Icon = ({onIconClick}) => {
  return (
    <div className="Icon" onClick={onIconClick}>
      <div id="top" className="bar"></div>
      <div id="middle" className="bar"></div>
      <div id="bottom" className="bar"></div>
    </div>
  )
}

const DropDown = () => {
  return (
    <div className="DropDown">
      <div className="contained-m">
        <a href="/">About</a>
        <hr/>
        <a href="/">Contact</a>
        <hr/>
      </div>
    </div>
  )
}

export default Header;
