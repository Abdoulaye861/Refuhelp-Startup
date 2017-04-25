import React from "react";
import { Link } from "react-router";
import Logo from "../../img/logo.png";
// import Faceicon from "../../img/facebook-icon.png";
// import Twittter from "../../img/twitter-icon.png";
import home from "../../img/home.png";
import './main.css'

class MainHeader extends React.Component {
   render() {
         return (
         <div className="mainheader">
            <Link to="main"><img className="logo" src={Logo}/> </Link>
            <div className="donate"> Faire un Don </div>
         </div>
      );
    }
 }

 export default MainHeader;
