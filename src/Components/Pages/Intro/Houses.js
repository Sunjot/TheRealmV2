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
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-0" name="Baratheon" status="Great House" leader="Robert Baratheon"
                    regions="The Crownlands & Stormlands" castles="Storm's End, Red Keep, and Dragonstone"/>
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>Given that Robert Baratheon is the King, House Baratheon automatically becomes the
                    Royal House. As the Royal House, they also rule the Crownlands, which is the location
                    of the Iron Throne (Red Keep in King's Landing) and where the King and his/her family reside.</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "1" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-1" name="Arryn" status="Great House" leader="Jon Arryn"
                    regions="The Vale" castles="The Eyrie" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Arryn has ruled over The Vale for 100s of years - well before the events
                    of the show take place. Jon Arryn, as mentioned prior, is The Hand.</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "2" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-2" name="Martell" status="Great House" leader="Doran Martell"
                    regions="Dorne" castles="Sunspear" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Martell has a history with House Lannister in a series of events that take
                    place not long before the beginning of the show in what was called "Robert's Rebellion".
                    </p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "3" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-3" name="Stark" status="Great House" leader="Eddard Stark"
                    regions="The North" castles="Winterfell" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Stark is one of the oldest houses in the Seven Kingdoms and have ruled over
                    The North since the beginning of time. They are one of two houses that play a significant
                    role in the series above all other houses.</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "4" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-4" name="Bolton" status="Vassal" leader="Roose Bolton"
                    regions="The North" castles="Dreadfort" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>A vassal under House Stark, the Boltons come to play a bigger part as the show progresses.
                    As their sigil shows, they are known for flaying their enimies (removing layers of skin).</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "5" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-5" name="Greyjoy" status="Great House" leader="Balon Greyjoy"
                    regions="The Iron Islands" castles="Pyke"/>
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>The Greyjoys rule over a series of Islands on the west coast of Westeros, and their
                    castle (Pyke) is located on one of these Islands of the same name - Pyke Island.</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "6" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-6" name="Lannister" status="Great House" leader="Tywin Lannister"
                    regions="Westerlands" castles="Casterly Rock" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Lannister is one of the oldest and richest houses in the Seven Kingdoms. Along
                    with the Starks, a significant portion of the show centers around these two Houses and their
                    heated rivalry.</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "7" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-7" name="Tyrell" status="Great House" leader="Mace Tyrell"
                    regions="The Reach" castles="Highgarden" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>As of the beginning of the show, House Tyrell have sworn loyalty to Robert and House
                    Baratheon after the events of Robert's Rebellion.
                    </p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "8" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-8" name="Tully" status="Great House" leader="Hoster Tully"
                    regions="The Riverlands" castles="Riverrun" />
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Tully has an alliance with House Stark and House Arryn through a series of
                    marriages that take place during Robert's Rebellion.</p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "9" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-9" name="Frey" status="Vassal" leader="Walder Frey"
                    regions="The Riverlands" castles="The Twins"/>
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Frey is a vassal under House Tully that comes to play a big role as the
                    series progresses. </p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
          { this.state.choice === "last-10" &&
              <div>
                <div className="houseIntroCont">
                  <HouseIntro sigil="sigil-10" name="Targaryen" status="Exiled Great House" leader="Viserys Targaryen"
                    regions="None (based in The Free Cities)" castles="None"/>
                  <div className="general-info">
                    <p className="miniheading">Other Notes</p>
                    <p>House Targaryen ruled the Seven Kingdoms for 300 years until the events of Robert's
                    Rebellion resulted in their dethroning. The surviving members fled to Essos, which is where
                    they reside as of the beginning of the series. </p>
                  </div>
                </div>
                <div className="house-divider"></div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Houses;
