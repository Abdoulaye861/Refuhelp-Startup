import React from "react";
import ModalVideo from "./ModalVideo";
import { Link } from "react-router";



class WelcomeVideo extends React.Component {
   constructor(props){
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
             <div className="home-content">
                <button className="video-accueil" onClick={() => this.openModal()}>Voir la vidéo</button>
                <ModalVideo isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                  <iframe src="https://player.vimeo.com/video/23360044" width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                  <p className="close-modal"><button onClick={() => this.closeModal()}>Fermer</button></p>
               </ModalVideo>
             </div>
         </div>
      );
    }
 }

 export default WelcomeVideo;
