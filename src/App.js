import React, { Component } from 'react';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import 'react-bootstrap/dist/react-bootstrap.min';

// import Homepage  from './components/HomePage/Homepage.js';
import Main from './components/MainPage/Main';
import Grid from './components/MainPage/Grid';
import Accomodation from './components/GuidePages/Accomodation/Accomodation';
import Administration from './components/GuidePages/Administration/Administration';
import Health from './components/GuidePages/Health/Health';
import Hobbies from './components/GuidePages/Hobbies/Hobbies';
import Insertion from './components/GuidePages/Insertion/Insertion';
import Connection from './components/GuidePages/Connection/Connection';


class App extends Component {

  render() {
      return (
         <Router history={hashHistory}>
           {/* <Route path="/" component={Homepage} /> */}
           <Route path="/" component={Main}>
             <IndexRoute component={Grid}/>
             <Route path="administration" component={Administration}/>
             <Route path="accomodation" component={Accomodation}/>
             <Route path="health" component={Health}/>
             <Route path="hobbies" component={Hobbies}/>
             <Route path="insertion" component={Insertion}/>
             <Route path="connection" component={Connection}/>
           </Route>
         </Router>
    );
  }
}

export default App;
