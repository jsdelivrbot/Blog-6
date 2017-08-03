import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import './Content.css';
import Article from './ArticleEditor/ArticleEditor';
import Contact from './Contact/Contact';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Switch>
          <Route exact path='/' component={Article}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Content;
