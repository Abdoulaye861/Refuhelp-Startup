import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import './App.css';
import  Home              from './components/Home';



class App extends Component {
   
  render() {
      return (
         <Router history={browserHistory}>
              <Route path="/" component={Home} />
              
         </Router>
    );
  }
}

export default App;
