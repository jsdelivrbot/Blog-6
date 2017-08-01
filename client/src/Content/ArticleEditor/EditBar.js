import React, { Component } from 'react';
import './EditBar.css';

class EditBar extends Component {
  render() {
    return (
      <div className="EditBar container-s container-m">
        <button>B</button>
        <button>I</button>
        <button>center</button>
        <button>left-align</button>
      </div>
    )
  }
}

export default EditBar;
