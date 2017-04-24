import React from "react";
import './guide.css';



class Accomodation extends React.Component {
   render() {
         return (
         <div>
              <div className="titling">
                <h3> Accomodation </h3>
             </div>
             <div className="guideMain">
                <div className="guides">
                   <div className="whereto"> <h3>Ou Manger</h3> </div>
                   <div className="bouton"> <h4>Comment Y aller !</h4></div>
                </div>

                <div className="guides">
                   <div className="whereto"> <h3>Ou Dormir</h3> </div>
                   <div className="bouton"><h4>Comment Y aller !</h4></div>
                </div>

                <div className="guides">
                   <div className="whereto"> <h3>Ou S'habiller</h3> </div>
                   <div className="bouton"><h4>Comment Y aller !</h4></div>
                </div>
             </div>
         </div>
      );
    }
 }

 export default Accomodation;
