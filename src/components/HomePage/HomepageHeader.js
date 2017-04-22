import React from 'react';
import logo from '../../img/logo.png';
import facebook from '../../img/facebook-icon.png';
import twitter from '../../img/twitter-icon.png';
import MainHeader from '../MainPage/MainHeader'
import './homepage.css';




class HomepageHeader extends React.Component {
   render() {
         return (
         <div>
                <MainHeader/>
         </div>
      );
    }
 }

 export default HomepageHeader;
