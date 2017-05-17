import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import RefugeesModal from "./RefugeesModal";
import AsylumModal from "./AsylumModal";

import './guide.css';

class Accomodation extends React.Component {
  constructor(props){
    super(props);
    this.state = {showRefugeesModal: false,
                  showAsylumModal: false
                  };

  }

   render() {
        let refClose = () => this.setState({ showRefugeesModal: false });
        let asyClose = () => this.setState({ showAsylumModal: false });
        const popover = (
          <Popover id="modal-popover" title="115">
            num gratuit et ouvert 7j/7j et 24h/24h
          </Popover>
        );

         return (
         <div>
             <div className="guideMain">
                 <h3> Commodités </h3>
                  <div className="cards">
                   <div className="guides  animated flipInX">
                      <div className="whereto"> <h3>Ou Dormir?</h3> </div>
                      <h4 style={{textAlign:'center'}}>La Préfecture et les associations s'en occupent</h4>
                        <ul className="housing">
                          <li>En cas d'urgence, Contactez le Samu Social        <i className="fa fa-phone-square fa-2x" aria-hidden="true"></i><OverlayTrigger overlay={popover}><span> 115</span></OverlayTrigger></li>


                          <li><Button onClick={() => this.setState({ showAsylumModal: true })}>Accueil du jour</Button></li>
                            <AsylumModal show={this.state.showAsylumModal} onHide={asyClose}/>

                          <li><Button onClick={() => this.setState({ showRefugeesModal: true })}>Réfugiés</Button></li>

                            <RefugeesModal show={this.state.showRefugeesModal} onHide={refClose}/>
                        </ul>
                      {/* <div className="bouton" onClick={this.open}><h5>Comment ça marche !</h5>
                    </div> */}
                   </div>
                    <div className="guides animated flipInX">
                       <div className="whereto"> <h3>Ou Manger?</h3> </div>
                       <h4 style={{textAlign:'center'}}>Repas Gratuits</h4>
                       <ul className="housing">
                         <li><Button>Les Restos du coeur</Button></li>


                         <li><Button onClick={() => this.setState({ showAsylumModal: true })}>Epicéries sociales</Button></li>
                           <AsylumModal show={this.state.showAsylumModal} onHide={asyClose}/>

                         <li><Button onClick={() => this.setState({ showRefugeesModal: true })}> Restaurants solidaires</Button></li>

                           <RefugeesModal show={this.state.showRefugeesModal} onHide={refClose}/>
                       </ul>

                       {/* <div className="bouton"> <h5>Comment Y aller !</h5>
                     </div> */}
                    </div>

                    <div className="guides animated flipInX">
                       <div className="whereto"> <h3>Ou Se Rafraîchir et S'habiller ?</h3> </div>
                       <h3>Contactez le Samu Social De Paris</h3>
                       <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                       <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                       {/* <div className="bouton"><h5>Comment Y aller !</h5></div> */}
                    </div>
                  </div>
             </div>
         </div>
      );
    }
 }

 export default Accomodation;
