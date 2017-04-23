import React from 'react';
import { Link } from 'react-router';
import Logo from "../../img/logo.png";
import Faceicon from "../../img/facebook-icon.png";
import Twittter from "../../img/twitter-icon.png";

class HomepageHeader extends React.Component {
   render() {
         return (
            <div className="mainheader">
               <div className="logo">
                   <Link to="/"><img src={Logo}/> </Link>
               </div>
                <div>
                  <div className="donate"> Faire un Don </div>
                  <a href="https://www.facebook.com/refuhelp.startup?fref=ts"><img className="face" src= {Faceicon}/></a>
                  <a href="https://twitter.com/refu_help"><img className="twit" src={Twittter}/></a>
               </div>
            </div>
      );
    }
 }

 export default HomepageHeader;
