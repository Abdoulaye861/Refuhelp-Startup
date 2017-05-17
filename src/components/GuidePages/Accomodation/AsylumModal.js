import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router';

class AsylumModal extends React.Component {

  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm" style={{textAlign:"center"}}>Demandeurs d'asile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>CADA(Centre d'Accueil de Demandeur d'Asile)</h3>
          <p>Se rapprocher auprès de l’OFII situé au sein du guichet unique où vous avez enregistré votre demande d’asile.</p>
          <Link to=''><p>Liste des CADA en île-de-France</p></Link>
          <h3>HUDA(Hébergement d'Urgence pour Demandeur d'Asile)</h3>
          <p>Appeler le 115</p>
          <Link to=''><p>Liste des HUDA en île-de-France</p></Link>
        </Modal.Body>
      </Modal>
    );
  }

}

export default AsylumModal;
