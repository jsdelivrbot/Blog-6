import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';
import './ArticleEditor.css';
import './ArticleEditor-M.css';
import EditBar from './EditBar';
import { Editor, EditorState, RichUtils } from 'draft-js';

const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
  },
};

class ArticleEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  myBlockStyleFn(contentBlock) {
    return 'editorClass'
  }
  editBarClick = (style) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
  }
  render() {
    return (
      <div className="ArticleEditor">
        <EditBar onClick={(style) => this.editBarClick(style)} />
        <div className="articleBody container-s container-m">
          <Editor
          customStyleMap={styleMap}
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          placeholder="Tell a story..."
          spellCheck={true}
          blockStyleFn={this.myBlockStyleFn}/>
        </div>
      </div>
    )
  }
}

export default ArticleEditor;
