import React from "react";
import ModalVideo from "./ModalVideo";
import { Link } from "react-router";



class HomepageContent extends React.Component {
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
             <h3 className="bienvenue"> Bienvenue sur REFUHELP!</h3>
             <h4 className="choix">Choisissez une langue</h4>
             <div className="home-content">
                <select className="language-select">
                   <option>Français</option>
                   <option>English</option>
                   <option>عربي</option>
                </select>
                <button className="video-accueil" onClick={() => this.openModal()}>VOIR LA VIDEO</button>
                <ModalVideo isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                  <iframe src="https://player.vimeo.com/video/23360044" width="640" height="360" frameBorder="0" allowFullScreen>
                  </iframe>
                  <p className="close-modal"><button onClick={() => this.closeModal()}>Fermer</button></p>
               </ModalVideo>
             </div>
             <div className="btn-wrapper">
               <Link to="main">COMMENCER ICI </Link>
             </div>
         </div>
      );
    }
 }

 export default HomepageContent;
