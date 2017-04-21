import React from "react";
import './grid.css';
import Heber       from "./img/herber.png";
import Sante       from "./img/sante.png";
import Admin       from "./img/admin.png";
import Loisirs     from "./img/loisirs.png";
import Connection  from "./img/Connection.png";
import insertion   from "./img/insertion.png";

class Grid extends React.Component {
   render() {
         return (
         <div className="gridewrapper">
            <div className="gride">
                   <div className="figure">
                     <img src={Heber} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <a href="#">Hebergement</a> </div>
                       </div>
                   </div>

                   <div className="figure">
                     <img src={Sante} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <a href="#">SANTE</a> </div>
                       </div>
                   </div>


                   <div className="figure">
                     <img src={Admin} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <a href="#">ADMINISTRATION</a></div>
                       </div>
                   </ div>


                   <div className="figure">
                     <img src={Loisirs} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <a href="#">LOISIRS</a></div>
                       </div>
                   </div>

                   <div className="figure">
                     <img src={Connection} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                           <div> <a href="#">CONNEXION</a></div>
                        </div>
                   </div>

                   <div className="figure">
                    <img src={insertion} alt="Thumb" width="400" height="300" />
                       <div className="figcaption">
                          <div> <a href="#">INSERTION  </a></div>
                       </div>
                 </div>
              </div>

         </div>
      );
    }
 }

 export default Grid;
