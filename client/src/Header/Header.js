import React, { Component } from 'react';
import './Header.css';

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
        <div className="contained">
          <Icon onIconClick={() => this.toggle()}/>
          <div className="location">
            <h1 className="locationTitle">Home</h1>
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
      <div className="contained">
        <a href="/">Home</a>
        <hr/>
        <a href="/">About</a>
        <hr/>
      </div>
    </div>
  )
}

export default Header;
