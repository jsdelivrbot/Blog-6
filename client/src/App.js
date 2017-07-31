import React, { Component } from 'react';
// import logo from './logo.svg'; UNUSED
import './App.css';

import Header from './Header/Header';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <Content className="Content" />
      </div>
    );
  }
}

export default App;
