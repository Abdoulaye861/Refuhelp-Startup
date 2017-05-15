import React from "react";
import { Button, Modal } from 'react-bootstrap';
import './guide.css';

class Accomodation extends React.Component {
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
         <div>
             <div className="guideMain">
                 <h3> Commodités </h3>
                  <div className="cards">
                   <div className="guides">
                      <div className="whereto"> <h3>Ou Dormir</h3> </div>
                      <h3>Contactez le Samu Social De Paris</h3>
                      <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                      <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                      <div className="bouton" onClick={this.open}><h5>Comment ça marche !</h5>
                    </div>

                    <Modal show={this.state.showModal} bsSize="large" onHide={this.close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

                        <hr />

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                   </div>
                    <div className="guides">
                       <div className="whereto"> <h3>Ou Manger</h3> </div>
                       <h3>Contactez le Samu Social De Paris</h3>
                       <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                       <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                       <div className="bouton"> <h5>Comment Y aller !</h5>
                     </div>
                    </div>

                    <div className="guides">
                       <div className="whereto"> <h3>Ou S'habiller</h3> </div>
                       <h3>Contactez le Samu Social De Paris</h3>
                       <h4><i className="fa fa-map-marker fa-2x" aria-hidden="true"></i> 35 Avenue Courteline, 75012 Paris</h4>
                       <h4><i className="fa fa-phone-square fa-2x" aria-hidden="true"></i> 115</h4>
                       <div className="bouton"><h5>Comment Y aller !</h5></div>
                    </div>
                  </div>
             </div>
         </div>
      );
    }
 }

 export default Accomodation;
