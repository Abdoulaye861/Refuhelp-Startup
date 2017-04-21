import React from "react";
import MainHeader from './MainHeader.js';
import Grid from './Grid.js';
import Footer from './Footer';



class Main extends React.Component {
   render() {
         return (
         <div className="mainwrapper">
             <MainHeader />
             <Grid />
             <Footer />
         </div>
      );
    }
 }

 export default Main;