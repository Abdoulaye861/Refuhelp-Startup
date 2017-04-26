import React from "react";
import MainHeader from './MainHeader.js';
import Footer from './Footer';
import './main.css'



class Main extends React.Component {
   render() {
         return (
         <div className="mainwrapper">
             <MainHeader />
              {this.props.children}
             <Footer />
         </div>
      );
    }
 }

 export default Main;
