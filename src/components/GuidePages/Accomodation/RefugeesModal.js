import React from 'react';
import { Modal } from 'react-bootstrap';
import hebergement from '../../../img/hebergement.mp4';

class RefugeesModal extends React.Component {

  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm" style={{textAlign: "center"}}>Comment procéder pour avoir un toit ou dormir?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{textAlign:"center"}}>
            <video controls autoPlay width="600" height="400">
              <source src={hebergement} type="video/mp4"/>
            </video>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

}

export default RefugeesModal;
