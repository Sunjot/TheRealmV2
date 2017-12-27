import React, { Component } from 'react';
import HouseIntro from './Houses/HouseIntro'

class Houses extends Component {

  constructor() {
    super();

    this.state = {
      choice: "0"
    }
  }

  setContent(val) {
    this.setState({
      choice: val
    });
  }

  render() {

    let houseButtons = [
      {name: "Baratheon", id: "0"},
      {name: "Arryn", id: "1"},
      {name: "Martell", id: "2"},
      {name: "Stark", id: "3"},
      {name: "Bolton", id: "4"},
      {name: "Greyjoy", id: "5"},
      {name: "Lannister", id: "6"},
      {name: "Tyrell", id: "7"},
      {name: "Tully", id: "8"},
      {name: "Frey", id: "9"},
      {name: "Targaryen", id: "last-10"}
    ];

    return (
      <div className="content">
        <p className="subheading">Houses</p>
        <p className="desc-cont">In this section we go over the Great Houses of the various regions. However, I also
          thought it was important that we discuss a few which are not Great Houses but do play a significant
          role in the show. Click below to get an overview of the respective house.
        </p>
        <div id="house-selecs">
          { houseButtons.map(b => {
            return <button id={b.id} className="house-buttons"
              onClick={ () => this.setContent(b.id) }>{b.name}</button>
          })}
        </div>
        <div id="houses-cont">
          { this.state.choice === "0" &&
              <div>
                <HouseIntro sigil="sigil-0" name="Baratheon" status="Great House" leader="Robert Baratheon"
                  regions="The Crownlands & Stormlands" castles="Storm's End, Red Keep, and Dragonstone"/>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "1" &&
              <div>
                <HouseIntro sigil="sigil-1" name="Arryn" status="Great House" leader="Jon Arryn"
                  regions="The Vale" castles="The Eyrie" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "2" &&
              <div>
                <HouseIntro sigil="sigil-2" name="Martell" status="Great House" leader="Doran Martell"
                  regions="Dorne" castles="Sunspear" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "3" &&
              <div>
                <HouseIntro sigil="sigil-3" name="Stark" status="Great House" leader="Eddard Stark"
                  regions="The North" castles="Winterfell" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "4" &&
              <div>
                <HouseIntro sigil="sigil-4" name="Bolton" status="Vassal" leader="Roose Bolton"
                  regions="The North" castles="Dreadfort" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "5" &&
              <div>
                <HouseIntro sigil="sigil-5" name="Greyjoy" status="Great House" leader="Balon Greyjoy"
                  regions="The Iron Islands" castles="Pyke"/>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "6" &&
              <div>
                <HouseIntro sigil="sigil-6" name="Lannister" status="Great House" leader="Tywin Lannister"
                  regions="Westerlands" castles="Casterly Rock" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "7" &&
              <div>
                <HouseIntro sigil="sigil-7" name="Tyrell" status="Great House" leader="Mace Tyrell"
                  regions="The Reach" castles="Highgarden" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "8" &&
              <div>
                <HouseIntro sigil="sigil-8" name="Tully" status="Great House" leader="Hoster Tully"
                  regions="The Riverlands" castles="Riverrun" />
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "9" &&
              <div>
                <HouseIntro sigil="sigil-9" name="Frey" status="Vassal" leader="Walder Frey"
                  regions="The Riverlands" castles="The Twins"/>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "last-10" &&
              <div>
                <HouseIntro sigil="sigil-10" name="Targaryen" status="Exiled Great House" leader="Viserys Targaryen"
                  regions="None (based in The Free Cities)" castles="None"/>
                <div className="house-divider"></div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Houses;
