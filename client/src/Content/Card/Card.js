import React, { Component } from 'react';

import './Card.css'

class Content extends Component {
  render() {
    return (
      <div className="Card contained rounded shadow">
        <div className="cardImg"
          style={{
              backgroundImage: "url('https://static.pexels.com/photos/27403/pexels-photo-27403.jpg')"
          }}>
        </div>
        <div className="cardTxtContainer">
          <h3 className="cardTitle">The Fall of The American National Park</h3>
          <p className="cardDescription">The dramatic fight between life and death is finally over. Two media agencies duke it out for the biggest fan base.</p>
        </div>
      </div>
    );
  }
}

export default Content;
