import React, { Component } from 'react';
import './AddModule.css';
import 'font-awesome/css/font-awesome.css';
import FA from 'react-fontawesome';

class AddModule extends Component {
  state = {
    showActions: false
  }
  onPlusClick = () => {
    this.setState({
      showActions: !this.state.showActions
    });
  }
  onItemClick = (item) => {
    this.props.addItem(item);
    this.setState({
      showActions: false
    });
  }
  render() {
    let actionClass = '';
    let plusClass = '';
    if(this.state.showActions) {
      actionClass = 'visible';
      plusClass = 'turn';
    }
    return (
      <div className="AddModule">
        <FA
          className={"plus " + plusClass}
          name='plus'
          size='2x'
          onClick={this.onPlusClick}
        />
        <div className={"actions " + actionClass}>
          <ul>
            <li onClick={() => this.onItemClick('Header')}>Header</li>
            <li onClick={() => this.onItemClick('Paragraph')}>Paragraph</li>
            <li onClick={() => this.onItemClick('Image')}>Image</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AddModule;
