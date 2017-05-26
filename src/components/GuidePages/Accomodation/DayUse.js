import React from 'react';
import axios from 'axios';

class DayUse extends React.Component {

constructor(props){
  super(props);
  this.state = {
    data : []
  }
}
componentDidMount() {
  const url = "http://www.weanswer.eu/resources/search/home-in-paris.json";
  axios.get(url)
    .then(res => {
      this.setState({ data: res.data.resources});
      console.log(this.state.data);
    })
}

  render() {
    return (
      <div className="adminMain">
        <h3>DayUse</h3>
        <ul>
          {this.state.data.map(house =>
            <li key={house.id}>{house.title} <button>Comment y aller?</button> </li>
          )}
        </ul>
      </div>
    );
  }

}

export default DayUse;
