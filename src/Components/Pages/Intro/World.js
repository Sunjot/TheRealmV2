import React, { Component } from 'react';
import Map from '../../../images/map.jpg';

class World extends Component {

  render() {
    return (
      <div className="content">
        <p className="subheading">The Known World</p>
        <p className="desc-cont">Ahh, the massive world of Game of Thrones. When I first started watching this show, I
        found it pretty difficult keeping track of all the locations because there
        are so damn many. I'm probably not alone either. Thus, the goal here is to make this as
        simple as possible by focusing on only the essential areas.<br/><br/>
        First off, you should know that the land is split into 3 continents, but we're going
        to assume there are just 2 (Westeros and Essos) because the third is mostly irrelevant
        in the show. Read the sections below and click anywhere on the map for a full-size image
        if you want a better look.</p><br/>
        <div id="map-wrap">
          <div id="continent-wrap">
            <div id="westeros-cont" className="continent-sec">
              <p className="subheading">Westeros</p>
              <p className="desc">Westeros is the most important continent, by far. On the map underneath,
              this is the western region.
              This area is split into two itself - the Seven Kingdoms (majority of the continent) and
              the area Beyond the Wall (the northern white area).
              Most of the show takes place in this continent.</p>
            </div>
            <div id="essos-cont" className="continent-sec">
              <p className="subheading">Essos</p>
              <p className="desc">The middle/eastern region on the map is known as Essos. Its
              significance is not that of Westeros, but one of the long-term storylines in the
              show does take place here. So, it's important that we at least get to know the
              different regions at the very least.</p>
            </div>
          </div>
          <a id="mapLink" href="https://i.imgur.com/6FYvVrJ.jpg" target="_blank" rel="noopener noreferrer" />
          <img id="map-cont" src={Map}></img>
        </div>
      </div>
    );
  }
}

export default World;
