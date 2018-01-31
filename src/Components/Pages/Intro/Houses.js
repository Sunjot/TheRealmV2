import React, { Component } from 'react';
import HouseIntro from './Houses/HouseIntro';
import Rob from "../../../images/rob-c.png";
import Stan from "../../../images/stan-c.png";
import Ren from "../../../images/renly-c.png";
import Joff from "../../../images/joff-c.png";
import JonArr from "../../../images/jonarr-c.png"
import Lysa from "../../../images/lysa-c.png"
import Robin from "../../../images/robin-c.png"
import Doran from "../../../images/doran-c.png"
import Oberyn from "../../../images/oberyn-c.png"
import Elia from "../../../images/elia-c.png"

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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Rob} />
                    <div className="member-info-cont">
                      <p className="member-title">Robert Baratheon</p>
                      <p>As described already, Robert is the King. He has 2 brothers, Stannis and Renly.
                      He is also married to Cersei Lannister, and they have 3 children:
                      Joffrey, Myrcella, and Tommen Baratheon. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Joff} />
                    <div className="member-info-cont">
                      <p className="member-title">Joffrey Baratheon</p>
                      <p>The son of Robert and Cersei. Joffrey is a scumbag (if the picture didn't give it
                      away) known for his arrogance and childishness. He has 2 younger siblings - Myrcella and
                      Tommen.
                        </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Stan} />
                    <div className="member-info-cont">
                      <p className="member-title">Stannis Baratheon</p>
                      <p>The brother of Robert and Renly Baratheon. He is part of the Small Council.
                      He is married to Selyse Baratheon and they have a daughter named Shireen.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Ren} />
                    <div className="member-info-cont">
                      <p className="member-title">Renly Baratheon</p>
                      <p>The youngest of the 3 brothers who is also part of the Small Council.
                      Renly has a gay relationship with Loras Tyrell, which they must keep a secret
                      as homosexuality is considered a sin in the Seven Kingdoms.</p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={JonArr} />
                    <div className="member-info-cont">
                      <p className="member-title">Jon Arryn</p>
                      <p>The head of House Arryn and the last known Hand of the King as the series gets
                      underway (spoiler alert, but not really)
                      as he is killed just before the beginning of episode one.
                      The picture on the left would be the one and only shot of him in the series.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Lysa} />
                    <div className="member-info-cont">
                      <p className="member-title">Lysa Arryn</p>
                      <p>Born into House Tully, Lysa married Jon during Robert's Rebellion (discussed last).
                      She takes over as the ruler of House Arryn after Jon's death on behalf of her
                      son, Robin, who is too young at the time for those duties. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Robin} />
                    <div className="member-info-cont">
                      <p className="member-title">Robin Arryn</p>
                      <p>The son of Jon and Lysa who takes the title as ruler of House Arryn after his father
                      dies. However, because of his age at the time, his mother rules on his behalf until he
                      is old enough.</p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Doran} />
                    <div className="member-info-cont">
                      <p className="member-title">Doran Martell</p>
                      <p>The head of House Martell and has two siblings, Elia and Oberyn. Unlike his
                      brother, Doran is much more level-headed and seldom gives in to making rash
                      decisions as a leader.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Oberyn} />
                    <div className="member-info-cont">
                      <p className="member-title">Oberyn Martell</p>
                      <p>Often referred to as the Red Viper (he apparently knows a lot about poisons).
                      He has two siblings, Doran and Elia. His style of combat makes him a huge threat in
                      battle, but not to be outdone by his good looks and charm, which has made it easy
                      for him to sleep around quite a bit.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Elia} />
                    <div className="member-info-cont">
                      <p className="member-title">Elia Martell</p>
                      <p>The sister of Doran and Oberyn, she is deceased before the events of the show.
                      I list her here because she plays a critical role during Robert's Rebellion in what
                      sets off some of the events in the series. </p>
                    </div>
                  </div>
                </div>
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
