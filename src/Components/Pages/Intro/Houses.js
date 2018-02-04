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
import Rickard from "../../../images/rickard-c.png"
import Eddard from "../../../images/ed-c.png"
import Cat from "../../../images/cat-c.png"
import Robb from "../../../images/robb-c.png"
import Sansa from "../../../images/sansa-c.png"
import Arya from "../../../images/arya-c.png"
import Bran from "../../../images/bran-c.png"
import Jon from "../../../images/jon-c.png"
import Rickon from "../../../images/rickon-c.png"
import Roose from "../../../images/roose-c.png"
import Ramsay from "../../../images/ramsay-c.png"
import Balon from "../../../images/balon-c.png"
import Euron from "../../../images/euron-c.png"
import Yara from "../../../images/yara-c.png"
import Theon from "../../../images/theon-c.png"
import Tywin from "../../../images/tywin-c.png"
import Cersei from "../../../images/cersei-c.png"
import Jaime from "../../../images/jaime-c.png"
import Tyrion from "../../../images/tyrion-c.png"
import Mace from "../../../images/mace-c.png"
import Olenna from "../../../images/olenna-c.png"
import Margaery from "../../../images/margaery-c.png"
import Loras from "../../../images/loras-c.png"
import Hoster from "../../../images/hoster-c.png"
import Edmure from "../../../images/edmure-c.png"

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
                      battle. He has 8 bastard daughters (4 with Ellaria Sand), referred to as the Sand Snakes.</p>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Rickard} />
                    <div className="member-info-cont">
                      <p className="member-title">Rickard Stark</p>
                      <p>The former head of House Stark until he was killed during Robert's Rebellion. He has
                      4 children: Eddard, Benjen, Brandon, and Lyanna. The latter 2 played a significant role
                      during Robert's Rebellion as well and are deceased as the series gets underway. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Eddard} />
                    <div className="member-info-cont">
                      <p className="member-title">Eddard Stark</p>
                      <p>The head of House Stark and married to Catelyn Stark, with whom he has 5 children:
                      Robb, Sansa, Arya, Bran, and Rickon. He also has a bastard son, Jon Snow, who he raises
                      in Winterfell.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Cat} />
                    <div className="member-info-cont">
                      <p className="member-title">Catelyn Stark</p>
                      <p>Born into House Tully, Catelyn married Eddard during Robert's Rebellion (along with
                      her sister Lysa who married into House Arryn). The two marriages were done to form an
                      alliance between the 3 houses during their battle against the Targaryens.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Jon} />
                    <div className="member-info-cont">
                      <p className="member-title">Jon Snow</p>
                      <p>The bastard son of Eddard. His mother is kept secret from him and everybody else by
                      Eddard. Due to his bastard status, he often feels like an outsider
                      despite being treated well by his father and siblings. Catelyn, however, always felt
                      a disconnect because he was not truly her son.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Robb} />
                    <div className="member-info-cont">
                      <p className="member-title">Robb Stark</p>
                      <p>The eldest son of Eddard and Catelyn. He is proficient in swordsmanship after training
                      from a young age but takes after his father as more of a battle commander.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Sansa} />
                    <div className="member-info-cont">
                      <p className="member-title">Sansa Stark</p>
                      <p>The eldest daughter of Eddard and Catelyn. Unlike her sister Arya, Sansa is much
                      more "lady-like" in her interests and takes after her mother.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Arya} />
                    <div className="member-info-cont">
                      <p className="member-title">Arya Stark</p>
                      <p>The youngest daughter of Eddard and Catelyn. In contrast to Sansa,
                      Arya is a tomboy who prefers the warfare life like that of her brothers and father.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Bran} />
                    <div className="member-info-cont">
                      <p className="member-title">Bran Stark</p>
                      <p>The second son of Eddard and Catelyn. He is in combat training by his father and
                      brothers with the goal of one day becoming a knight.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Rickon} />
                    <div className="member-info-cont">
                      <p className="member-title">Rickon Stark</p>
                      <p>The youngest son of Eddard and Catelyn. Rickon is fairly young to play much of an
                        importance in the beginning of the series, but keep him noted for later on in the show.</p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Roose} />
                    <div className="member-info-cont">
                      <p className="member-title">Roose Bolton</p>
                      <p>The head of House Bolton and father of Ramsay, his legitimized bastard son.
                      He is also married to Walda Frey. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Ramsay} />
                    <div className="member-info-cont">
                      <p className="member-title">Ramsay Bolton</p>
                      <p>The legitimized bastard son of Roose. He can be described as sadistic and
                      cruel human being who enjoys torturing and killing others.</p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Balon} />
                    <div className="member-info-cont">
                      <p className="member-title">Balon Greyjoy</p>
                      <p>The head of House Greyjoy. The father of two: Yara and Theon. He also has two brothers
                      in Euron and Aeron. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Euron} />
                    <div className="member-info-cont">
                      <p className="member-title">Euron Greyjoy</p>
                      <p>The brother of Balon and Aeron and uncle to Yara and Theon. As of the beginning of
                      the series, he is in exile. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Yara} />
                    <div className="member-info-cont">
                      <p className="member-title">Yara Greyjoy</p>
                      <p>The daughter of Balon and sister of Theon. She was raised to be a warrior - which - in the ironborn culture,
                      is unusual for women. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Theon} />
                    <div className="member-info-cont">
                      <p className="member-title">Theon Greyjoy</p>
                      <p>The son of Balon and brother of Yara. As of the beginning of the series, he is held
                      hostage at Winterfell. </p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Tywin} />
                    <div className="member-info-cont">
                      <p className="member-title">Tywin Lannister</p>
                      <p>The head of House Lannister. He was married to Joanna, the mother of his 3 children -
                      Jaime and Cersei (twins), and Tyrion. She passed away giving birth to Tyrion.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Cersei} />
                    <div className="member-info-cont">
                      <p className="member-title">Cersei Lannister</p>
                      <p>The daughter of Tywin and Joanna, and the twin sister of Jaime. She is married to
                        Robert, and they have 3 children - Joffrey, Myrcella, and Tommen Baratheon.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Jaime} />
                    <div className="member-info-cont">
                      <p className="member-title">Jaime Lannister</p>
                      <p>The son of Tywin and Joanna, and the twin brother of Cersei. He is referred to as
                      the Kingslayer for killing the Mad King Aerys Targaryen during Robert's Rebellion. </p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Tyrion} />
                    <div className="member-info-cont">
                      <p className="member-title">Tyrion Lannister</p>
                      <p>The son of Tywin and Joanna, and brother of Cersei and Jaime. Tyrion was born a dwarf.
                      As a result of his mother dying while giving birth to him, he is hated by his own family
                      members Cersei and Tywin. Jaime, meanwhile, has always been close with him. He loves
                      drinking, by the way.</p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Mace} />
                    <div className="member-info-cont">
                      <p className="member-title">Mace Tyrell</p>
                      <p>The head of House Tyrell and the son of Olenna. He has 2 children: Margaery and Loras.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Olenna} />
                    <div className="member-info-cont">
                      <p className="member-title">Olenna Tyrell</p>
                      <p>The mother of Mace. Olenna is rather witty and intelligent. Despite the title as ruler
                      of House Tyrell belonging to Mace, she holds very high influence in the Reach.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Margaery} />
                    <div className="member-info-cont">
                      <p className="member-title">Margaery Tyrell</p>
                      <p>The daughter of Mace and sister of Loras. She is known for her beauty and cleverness
                      (probably takes that from her grandmother, Olenna).</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Loras} />
                    <div className="member-info-cont">
                      <p className="member-title">Loras Tyrell</p>
                      <p>The son of Mace and brother of Margaery. He has a gay relationship with
                      Renly Baratheon, which they must keep a secret as homosexuality is considered a
                      sin in the Seven Kingdoms.</p>
                    </div>
                  </div>
                </div>
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
                <div className="family-members">
                  <p className="miniheading" id="mems-of-house">Members</p>
                  <div className="member-row">
                    <img src={Hoster} />
                    <div className="member-info-cont">
                      <p className="member-title">Hoster Tully</p>
                      <p>The head of House Tully, but mostly by title only as his health has deteriorated
                        and so his son Edmure has taken over most duties. He also has 2 daughters: Catelyn
                        and Lysa.</p>
                    </div>
                  </div>
                  <div className="member-row">
                    <img src={Edmure} />
                    <div className="member-info-cont">
                      <p className="member-title">Edmure Tully</p>
                      <p>The son of Hoster Tully and the unofficial head of House Tully due to his
                      father's health.</p>
                    </div>
                  </div>
                </div>
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
