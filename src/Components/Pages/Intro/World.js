import React, { Component } from 'react';
import Map from '../../../images/map.jpg';
import ReactHtmlParser from 'react-html-parser';

class World extends Component {

  constructor() {
    super();
    this.contButtonFocus = this.contButtonFocus.bind(this);

    this.state = {
      activeContButton: "0"
    }
  }

  contButtonFocus(e) {
    this.setState({
      activeContButton: e.target.id
    });
  }

  render() {
    let contButtons = [
      {name: "Westeros", id: "0"},
      {name: "Essos", id: "1"}];

    let westeros = `
      Westeros is the most important continent, by far. On the map above, this is the western region.
      This area is split into two itself - the Seven Kingdoms (majority of the continent) and
      the area Beyond the Wall (the northern white area).
      Most of the show takes place here, and so we'll make sure to go into more detail next.`;

    let essos = `
      The middle/eastern region on the map is known as Essos. Compared to Westeros, this
      continent isn't all that relevant either. However, one of the long-term storylines in the
      show does take place here, so it's important that we at least know what's there.`;

    return (
      <div className="content">
        <p className="subheading">The World</p>
        <a id="mapLink" href="http://i.imgur.com/6FYvVrJ.jpg" target="_blank" rel="noopener noreferrer">
          <img id="map-cont" src={Map}></img>
        </a><br/>
        <p>Ahh, the massive world of Game of Thrones. When I first started watching this show, I
        found it pretty difficult keeping track of all the locations because there
        are so damn many. I'm probably not alone either. Thus, the goal here is to make this as
        simple as possible by focusing on only the essential areas.</p><br/>
        <p>First off, you should know that the land is split into 3 continents, but we're going
        to assume there are just 2 because the third is mostly irrelevant in the show. Click below
        to get a bried overview of each. </p><br/>
        <div id="continentButtons">
          {contButtons.map(b => {
            return <button
              className={this.state.activeContButton === b.id ? "button-active" : ""}
                type="button" id={b.id}
                onClick={this.contButtonFocus}>
                {b.name}
              </button>
          })}
        </div>
        <div id="continentInfo">
          <p>{this.state.activeContButton === "0" ? ReactHtmlParser(westeros) : ReactHtmlParser(essos)}</p>
        </div>
      </div>
    );
  }
}

export default World;
