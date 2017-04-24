import React from "react";
import ModalGuide from "./ModalGuide"
import './guide.css';



class Accomodation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen : false }
  }

  openModal () {
     this.setState({ isModalOpen : true })
  }
  closeModal () {
     this.setState({ isModalOpen : false })
  }

   render() {
         return (
         <div>
              <div className="titling">
                <h3> Hébergement </h3>
             </div>
             <div className="guideMain">
               <div className="guides">
                  <div className="whereto"> <h3>Ou Dormir</h3> </div>
                  <h3>Contactez le Samu Social De Paris</h3>
                  <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                  <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                  <div className="bouton" onClick={() => this.openModal()}><h4>Comment ça marche !</h4>
                </div>

                <div className="modal-guide" style={{
                    display: this.state.isModalOpen
                        ? 'flex'
                        : 'none'
                }}>
                <div className="modal-content">
                  <ul>
                    <li>Le 115 est un numéro d’urgence à n’utiliser que si vous êtes sans possibilité d’hébergement au moment de l’appel.</li>
                    <li>N’appelez pas le 115 tant que vous disposez encore d’un logement ou êtes logé chez un tiers.</li>
                    <li>Le 115 octroie des places au jour le jour. Il n’y a jamais de réservation.</li>
                 </ul>
                  <p className="close-modal"><button onClick={() =>  this.closeModal()}>Fermer</button></p>
                </div>
                </div>
               </div>
                <div className="guides">
                   <div className="whereto"> <h3>Ou Manger</h3> </div>
                   <h3>Contactez le Samu Social De Paris</h3>
                   <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                   <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                   <div className="bouton" onClick={() => this.openModal()}> <h4>Comment Y aller !</h4>
                 </div>
                </div>

                <div className="guides">
                   <div className="whereto"> <h3>Ou S'habiller</h3> </div>
                   <h3>Contactez le Samu Social De Paris</h3>
                   <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                   <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                   <div className="bouton" onClick={() => this.openModal()}><h4>Comment Y aller !</h4></div>
                </div>
             </div>
         </div>
      );
    }
 }

 export default Accomodation;
