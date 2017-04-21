import React from "react";
import './mainheader.css';
import Logo from "./img/Logo.png";
import Faceicon from "./img/facebook.png";
import Twittter from "./img/twitter.png";

class MainHeader extends React.Component {
   render() {
         return (
         <div className="mainheader">
            <div className="logo">
                <a href="#"> <img src={Logo}/> </a>
            </div>

            <div className="donate"> Faire un Don </div>

            <div className="face">
               <a href="#"> <img src= {Faceicon} /> </a>
           </div>

           <div className="twit">
              <a href="#"> <img src={Twittter} /> </a>
           </div>
         </div>
      );
    }
 }

 export default MainHeader;
