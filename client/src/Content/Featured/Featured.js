import React, { Component } from 'react';
import './Featured.css';
import './Featured-M.css';

class Featured extends Component {
  render() {
    return (
      <div className="Featured contained-m">
          <div className="featuredCover"
            style={{backgroundImage: "url('https://static1.squarespace.com/static/58acc83a8419c227faae54ae/t/591163fe2e69cf8bc09f25eb/1494311941497/')"}}
          >
          </div>
          <div className="featuredTextContainer container-s ">
            <h1 className="featuredTitle">What We Look For In a New Laptop</h1>
            <hr id="featuredHr"/>
          </div>

        {/* <div className="featuredTextContainer container-m">
          <h1>What We Look For In a Laptop</h1>
          <hr id="featuredHr"/>
        </div> */}

      </div>
    );
  }
}

export default Featured;
