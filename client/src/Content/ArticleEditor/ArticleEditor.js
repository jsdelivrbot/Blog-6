import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import './ArticleEditor.css';
import './ArticleEditor-M.css';
import EditBar from './EditBar';
import {Editor, EditorState} from 'draft-js';

class ArticleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  myBlockStyleFn(contentBlock) {
    return 'editorClass'
  }
  render() {
    return (
      <div className="ArticleEditor">
        <div className="articleBody container-s container-m">
          <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Tell a story..."
          spellCheck={true}
          blockStyleFn={this.myBlockStyleFn}/>
        </div>

        <EditBar />
      </div>
    )
  }
}

export default ArticleEditor;
