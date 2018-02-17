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
            <p className="desc-cont">Ahh, the massive world of Game of Thrones. When I first started watching this show, I
            found it pretty difficult keeping track of all the locations because there
            are so damn many. I'm probably not alone either. Thus, the goal here is to make this as
            simple as possible by focusing on only the essential areas.
            The land is split into 3 continents, but we're going
            to assume there are just 2 (Westeros and Essos) because the third is mostly irrelevant
            in the show.</p><br/>
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
                <p className="desc">The middle and eastern region on the map is known as Essos. The
                significance of Essos is not the same as Westeros, but one of the long-term storylines in the
                show does take place here. So, it's still important that we get to know the
                different regions there at the very least.</p>
              </div>
            </div>
            <a id="mapLink" href="https://i.imgur.com/6FYvVrJ.jpg" target="_blank" rel="noopener noreferrer" />
            <img id="map-cont" src={Map}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default World;
