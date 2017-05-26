import React from 'react';
import { Modal } from 'react-bootstrap';

class RefugeesModal extends React.Component {

  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm" style={{textAlign: "center"}}>Comment procéder pour avoir un toit ou dormir?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe allowFullScreen="true" style={{transitionDuration:"0",transitionProperty:"no",margin:"0 auto",position:"relative",display:"block",backgroundColor:"#000000"}} frameBorder="0" scrolling="no" width="640" height="360" src="https://www.arte.tv/player/v3/index.php?json_url=https%3A%2F%2Fapi.arte.tv%2Fapi%2Fplayer%2Fv1%2Fconfig%2Ffr%2F063038-000-A%3Fvector%3DINFO%26autostart%3D1&lang=fr_FR&config=arte_info&embed=1&autostart=1&mute=0"></iframe>
        </Modal.Body>
      </Modal>
    );
  }

}

export default RefugeesModal;
