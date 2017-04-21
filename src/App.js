import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import  Homepage  from './components/HomePage/Homepage.js';
import Main from './components/MainPage/Main.js';


class App extends Component {

  render() {
      return (
         <Router history={browserHistory}>
              <Route path="/" component={Main} />
              <IndexRoute component={Main}/>
         </Router>
    );
  }
}

export default App;
