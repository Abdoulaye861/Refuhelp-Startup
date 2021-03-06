import React from "react";
import { Link } from "react-router";
import { Modal } from 'react-bootstrap';
import Logo from "../../img/logo.png";
import france from "../../img/fr.png";
import uk from "../../img/uk.png";
import presentation from "../../img/presentation.mp4";
import './main.css'

class MainHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {showModal: false};

  }
  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }
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
              <button className="video-accueil" onClick={this.open}>Voir la vidéo</button>
              <Modal show={this.state.showModal} bsSize="large" onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title>C'est quoi RefuHelp?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{textAlign:'center'}}>
                    <video controls autoPlay width="600" height="400">
                      <source src={presentation} type="video/mp4"/>
                    </video>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
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
