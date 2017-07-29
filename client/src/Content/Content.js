import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import './Content.css';
import Card from './Card/Card';
import Featured from './Featured/Featured';
import Article from './Article/Article';
import ArticleEditor from './ArticleEditor/ArticleEditor';
import Contact from './Contact/Contact';
import About from './About/About';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact path='/' component={Card}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
