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
                  <h3>Samu Social De Paris</h3>
                  <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i></h4>
                  <div className="bouton" onClick={() => this.openModal()}><h4>Comment Y aller !</h4></div>
                  <ModalGuide isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>

                    <p className="close-modal"><button onClick={() => this.closeModal()}>Fermer</button></p>
                 </ModalGuide>
               </div>
                <div className="guides">
                   <div className="whereto"> <h3>Ou Manger</h3> </div>
                   <div className="bouton" onClick={() => this.openModal()}> <h4>Comment Y aller !</h4></div>
                </div>

                <div className="guides">
                   <div className="whereto"> <h3>Ou S'habiller</h3> </div>
                   <div className="bouton" onClick={() => this.openModal()}><h4>Comment Y aller !</h4></div>
                </div>
             </div>
         </div>
      );
    }
 }

 export default Accomodation;
