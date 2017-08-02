import React, { Component } from 'react';
import './EditBar.css';

class EditBar extends Component {
  render() {
    return (
      <div className="EditBar container-s container-m">
        <button onClick={() => this.props.onClick('BOLD')}><b>B</b></button>
        <button onClick={() => this.props.onClick('ITALIC')}><i>I</i></button>
        <button onClick={() => this.props.onClick('UNDERLINE')}>__</button>
        <button onClick={() => this.props.onClick('CODE')}>&lt;/&gt;</button>
        <button onClick={() => this.props.onClick('STRIKETHROUGH')}>line-through</button>
      </div>
    )
  }
}

export default EditBar;
