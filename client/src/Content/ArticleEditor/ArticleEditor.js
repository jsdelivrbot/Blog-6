import React, { Component } from 'react';
import './ArticleEditor.css';
import './ArticleEditor-M.css';

// import ContentEditable from 'react-content-editable';
var ContentEditable = require("react-contenteditable");

class ArticleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',
      p: ["Your article"]
    }
  }
  handleChange = (e, type, index) => {
    switch (type) {
      case 'title':
        this.setState({
          title: e.target.value
        });
        break;
      case 'paragraph':
        this.setState({
          p: [e.target.value]
        });
        break;
      default:
    }
  }
  handleKey = (e) => {
    if(e.key === 'Enter') {
      console.log("entered!!!!!")
    }
  }
  handleFocus = () => {

  }
  handleBlur = () => {

  }
  render() {
    console.log(this.state.p);
    console.log(this.state.title);
    return (
      <div className="ArticleEditor">
        <div className="articleBody container-s container-m">
          <ContentEditable
            className="editTile"
            html={this.state.title}
            disabled={false}
            onChange={(e) => this.handleChange(e, 'title', null)}
          />
          <ContentEditable
            className="editParagraph"
            html={this.state.p[0]}
            disabled={false}
            onChange={(e) => this.handleChange(e, 'paragraph', 0)}
            onKeyPress={this.handleKey}
          />
        </div>
      </div>
    )
  }
}

export default ArticleEditor;
