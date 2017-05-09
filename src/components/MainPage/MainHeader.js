import React from "react";
import { Link } from "react-router";
import WelcomeVideo from "./WelcomeVideo"
import Logo from "../../img/logo.png";
import france from "../../img/fr.png";
import uk from "../../img/uk.png";
import './main.css'

class MainHeader extends React.Component {
   render() {
         return (
         <div className="mainheader">
            <Link to="/"><img className="logo" src={Logo} alt="logo"/> </Link>
            <div className="right-menu">
              <div className="dropdown">
                 <button className="dropbtn">Français</button>
                 <div  className="dropdown-content">
                  <a href="#"><img src={france} alt="" width="18px"/>Français</a>
                  <a href="#"><img src={uk} alt="" width="18px" />English</a>
               </div>
              </div>
              <WelcomeVideo/>
              <div className="donate">
               <form name="_xclick" action="https://www.paypal.com/fr/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_xclick"/>
                <input type="hidden" name="business" value="pseudonyme@monentreprise.com"/>
                <input type="hidden" name="item_name" value="Equipe en formation"/>
                <input type="hidden" name="currency_code" value="EUR"/>
                <input type="hidden" name="amount" value="25,00"/>
                <input type="image" src="http://www.paypal.com/fr_FR/i/btn/x-click-butcc-donate.gif"  name="submit" alt="Effectuez vos paiements via PayPal : une solution rapide, gratuite et sécurisée"/>
               </form>
              </div>
            </div>
        </div>
      );
    }
 }

 export default MainHeader;
