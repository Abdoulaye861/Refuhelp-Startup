import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router';
import RefugeesModal from "./RefugeesModal";
import './guide.css';
import jaga from "../../../../src/img/ress.png";
import tord from "../../../../src/img/hooo.png";
import hebergement from '../../../img/hebergement.mp4';

class Accomodation extends React.Component {
  constructor(props){
    super(props);
    this.state = {showRefugeesModal: false,
                  };
  }
  closeRefugeesModal = () => {
    this.setState({ showRefugeesModal: false });
  }

  openRefugeesModal = () => {
    this.setState({ showRefugeesModal: true });
  }

   render() {
        let refClose = () => this.setState({ showRefugeesModal: false });

         return (
         <div>
             <div className="guideMain">
               <div className="headerss">
                <h3> Commodités </h3>
              </div>

                  <div className="cards">
                   <div className="guides  animated flipInX">
                      <div className="whereto"> <h3>Ou Dormir?</h3> </div>
                      <h4 style={{textAlign:'center'}}>La Préfecture et les associations s'en occupent</h4>
                        <ul className="housing">
                          <li>En cas d'urgence, Contactez le Samu Social <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i><span> 115</span></li>

                          <li> <img src={tord} /><Button onClick={this.openRefugeesModal}>Se Loger! (video)</Button></li>
                          <Modal show={this.state.showRefugeesModal}  onHide={this.closeRefugeesModal} bsSize="large" aria-labelledby="contained-modal-title-sm">
                            <Modal.Header closeButton>
                              <Modal.Title id="contained-modal-title-sm" style={{textAlign: "center"}}>Comment procéder pour avoir un toit ou dormir?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div style={{textAlign:"center"}}>
                                <video controls width="600" height="400">
                                  <source src={hebergement} type="video/mp4"/>
                                </video>
                              </div>
                            </Modal.Body>
                          </Modal>
                            {/* <RefugeesModal show={this.state.showRefugeesModal} onHide={refClose}/> */}

                          <li> <img src={tord} /><Link to="/accueil-du-jour"><Button>Accueil du jour</Button></Link></li>

                        </ul>
                   </div>
                    <div className="guides animated flipInX">
                       <div className="whereto"> <h3>Ou Manger?</h3> </div>
                       <h4 style={{textAlign:'center'}}>Repas Gratuits</h4>
                       <ul className="housing eating">

                         <li>  <img src={jaga} /><Button> Les Restos du coeur</Button> </li>


                         <li>  <img src={jaga} /> <Button onClick={() => this.setState({ showAsylumModal: true })}>Epicéries sociales</Button></li>

                         <li> <img src={jaga} /> <Button> Restaurants solidaires</Button></li>

                           <RefugeesModal show={this.state.showRefugeesModal} onHide={refClose}/>
                       </ul>
                    </div>

                    <div className="guides animated flipInX">
                       <div className="whereto"> <h3>Ou Se Rafraîchir et S'habiller ?</h3> </div>
                       <h3>Contactez le Samu Social De Paris</h3>
                       <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                       <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                    </div>
                  </div>
             </div>

         </div>
      );
    }
 }

 export default Accomodation;
