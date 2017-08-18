import React, { Component } from 'react';
import Map from '../../../images/map.jpg';

class Westeros extends Component {

  render() {
    return (
      <div className="content">
        <p className="subheading">Westeros</p>
        <a id="mapLink" href="http://i.imgur.com/6FYvVrJ.jpg" target="_blank" rel="noopener noreferrer">
          <img id="map-cont" src={Map}></img>
        </a><br/>
        <p>Ahh, the massive world of Game of Thrones. When I first started watching this show, I
        found it pretty difficult keeping track of all the important locations. The goal
        here is to make this as simple as possible.</p>
      </div>
    );
  }
}

export default Westeros;
