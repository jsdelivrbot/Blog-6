import React, { Component } from 'react';
import './Content.css';
import Card from './Card/Card';
import Featured from './Featured/Featured';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Featured />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Content;
