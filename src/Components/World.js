import React, { Component } from 'react';
import Map from '../images/map.jpg';
import Header from './Header';

class World extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div id="world-desc-cont">
            <p className="subheading">The Known World</p>
            <p className="desc-cont">If you didn't know already, the world of Game of Thrones is MASSIVE.
            When I was first introduced to this show, I found it pretty difficult to keep track of all the
            locations (I'm going to assume I wasn't the only one). Thus, the goal here is to break down the map
            and try to focus on the parts I feel are most important. The land is split into 3 continents,
            but luckily for us, the 3rd continent is pretty much irrelevant in the series and so we only need
            to worry about Westeros and Essos. Below is a map of The Known World and brief descriptions
            of the two continents.</p><br/>
          </div>
          <div id="map-wrap">
            <div id="continent-wrap">
              <div id="westeros-cont" className="continent-sec">
                <p className="subheading">Westeros</p>
                <p className="desc">Westeros is the most important continent, by far. On the map underneath,
                this is the western region.
                This area is split into two itself - the Seven Kingdoms (majority of the continent) and
                the area Beyond the Wall (the northern white area).
                Most of the show takes place on this continent.</p>
              </div>
              <div id="essos-cont" className="continent-sec">
                <p className="subheading">Essos</p>
                <p className="desc">The middle and eastern region on the map is known as Essos. While we won't see
                a whole lot of action taking place here (relative to Westeros), one of the long-term storylines in
                the show is based in Essos. So, it's still important that we get to know the
                different regions there at the very least.</p>
              </div>
            </div>
            <img alt="got-map" id="map-cont" src={Map}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default World;
