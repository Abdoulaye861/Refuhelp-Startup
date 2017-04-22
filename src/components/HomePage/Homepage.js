import React from "react";
import HomepageHeader from './HomepageHeader'
import HomepageContent from './HomepageContent'




class Home extends React.Component {
   render() {
         return (
           <div>
             <div className="homepage">
                 <HomepageHeader/>
                 <HomepageContent/>
             </div>
          </div>
      );
    }
 }

 export default Home;
