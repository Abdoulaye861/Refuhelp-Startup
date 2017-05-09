import React from "react";
import Faceicon from "../../img/facebook-icon.png";
import Twittter from "../../img/twitter-icon.png";

class Footer extends React.Component {
   render() {
         return (
           <div className="foot">  
             <div className="social-networks">
                   <a href="https://www.facebook.com/refuhelp.startup?fref=ts"><img className="face" src={Faceicon} alt="facebook"/></a>
                   <a href="https://twitter.com/refu_help"><img className="twit" src={Twittter} alt="twitter"/></a>
             </div>
             <p> &copy; refuhelp 2017 </p>
           </div>
      );
    }
 }
 export default Footer;
