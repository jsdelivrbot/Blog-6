import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import './ArticleEditor.css';
import './ArticleEditor-M.css';
import EditBar from './EditBar';
import AddModule from './AddModule';
import TextBlock from './TextBlock';

class ArticleEditor extends Component {
  state = {
    h: 1,
    p: 0
  }
  addItem = (item) => {
    console.log('time to add a ' + item);
    switch (item) {
      case 'Header':
        this.setState({h: this.state.h + 1});
        break;
      case 'Paragraph':
        this.setState({p: this.state.p + 1});
        break;
      case 'Image':
        alert("Sorry, can't do images yet");
        break;
      default:
        console.log('Did not know what type of item to add. NOT a Header, Paragraph or Image');
    }
  }
  newTextBlock = () => {
    const num = this.state.h + this.state.p;
    let blocks = [];
    for(let i = 0; i < num; i++) {
      blocks.push(<TextBlock />);
    }
    return blocks;
  }
  render() {
    return (
      <div className="ArticleEditor">
        <EditBar onClick={(style) => this.editBarClick(style)} />
        <div className="articleBody container-s container-m">
          {this.newTextBlock()}
          <AddModule addItem={(item) => this.addItem(item)}/>
        </div>
      </div>
    )
  }
}

export default ArticleEditor;
