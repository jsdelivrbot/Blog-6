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
      p: ["bama"]
    }
  }
  titleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  pChange = (e) => {
    this.setState({
      p: [...this.state.p, e.target.value]
    });
  }
  handleFocus = () => {

  }
  handleBlur = () => {

  }
  render() {
    return (
      <div className="ArticleEditor">
        <div className="articleBody container-s container-m">
          <ContentEditable
            className="editTile"
            html={this.state.title}
            disabled={false}
            onChange={this.handleChange}
          />
          <ContentEditable
            className="editParagraph"
            html={this.state.p[0]}
            disabled={false}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default ArticleEditor;
