import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import './Content.css';
import Article from './ArticleEditor/ArticleEditor';
import Contact from './Contact/Contact';
import About from './About/About';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact path='/' component={Article}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
