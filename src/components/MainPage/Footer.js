import React from "react";
import Faceicon from "../../img/facebook-icon.png";
import Twittter from "../../img/twitter-icon.png";

class Footer extends React.Component {
   render() {
         return (
           <div className="foot">
             <p> &copy; refuhelp 2017 </p>
             <div className="social-networks">
                   <a href="https://www.facebook.com/refuhelp.startup?fref=ts"><img className="face" src= {Faceicon}/></a>
                   <a href="https://twitter.com/refu_help"><img className="twit" src={Twittter}/></a>
             </div>            
           </div>
      );
    }
 }
 export default Footer;
