import React, { Component } from 'react';
import './Content.css';
import Card from './Card/Card';
import Featured from './Featured/Featured';
import Article from './Article/Article';
import ArticleEditor from './ArticleEditor/ArticleEditor';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <ArticleEditor />
        {/* <Featured />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    );
  }
}

export default Content;
