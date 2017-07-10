import React, { Component } from 'react';
import './Content.css';
import Card from './Card/Card';

class Content extends Component {
  render() {
    return (
      <div className="Content">
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
