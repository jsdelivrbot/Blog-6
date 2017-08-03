import React, { Component } from 'react';
import './EditBar.css';

class EditBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ['BOLD']
    }
  }
  onSelect = (type) => {
    this.props.onClick(type);
    let newArray = [];
    if(this.state.selected.indexOf(type) >= 0) {
       newArray = this.state.selected.filter(item => {
        return item !== type;
      });
    } else {
      newArray = this.state.selected.concat(type);
    }
    this.setState({
      selected: newArray
    });
  }
  selected = (type) => {
    if(this.state.selected.indexOf(type) >= 0) {
      return 'selected';
    }
      return null;
  }
  render() {
    return (
      <div className="EditBar container-s container-m">
        <button
          className={this.selected('BOLD')}
          onClick={() => this.onSelect('BOLD')}>
            <b>B</b>
        </button>
        <button
          className={this.selected('ITALIC')}
          onClick={() => this.onSelect('ITALIC')}>
            <i>I</i>
        </button>
        <button
          className={this.selected('UNDERLINE')}
          onClick={() => this.onSelect('UNDERLINE')}
            >__
        </button>
        <button
          className={this.selected('STRIKETHROUGH')}
          onClick={() => this.onSelect('STRIKETHROUGH')}
            >line-through
        </button>
      </div>
    )
  }
}

export default EditBar;
