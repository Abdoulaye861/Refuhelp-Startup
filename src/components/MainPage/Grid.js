import React from "react";
import { Link } from "react-router"
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
                          <div><Link to="/main/accomodation">Hebergement</Link></div>
                       </div>
                   </div>

                   <div className="figure">
                     <img src={Sante} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <Link to="/main/health">SANTE</Link></div>
                       </div>
                   </div>


                   <div className="figure">
                     <img src={Admin} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <Link to="/main/administration">ADMINISTRATION</Link></div>
                       </div>
                   </div>


                   <div className="figure">
                     <img src={Loisirs} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                          <div> <Link to="/main/hobbies">LOISIRS</Link></div>
                       </div>
                   </div>

                   <div className="figure">
                     <img src={Connection} alt="Thumb" width="400" height="300" />
                        <div className="figcaption">
                           <div><Link to="/main/connection">CONNEXION</Link></div>
                        </div>
                   </div>

                   <div className="figure">
                    <img src={insertion} alt="Thumb" width="400" height="300" />
                       <div className="figcaption">
                          <div> <Link to="/main/insertion">INSERTION </Link></div>
                       </div>
                 </div>
              </div>

         </div>
      );
    }
 }

 export default Grid;
