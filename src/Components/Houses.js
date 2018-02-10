import React, { Component } from 'react';
import HouseIntro from './Houses/HouseIntro';
import Family from './Houses/Family';
import HouseItem from "./Houses/HouseItem";
import JonArr from "../images/jonarr-c.png"
import Lysa from "../images/lysa-c.png"
import Robin from "../images/robin-c.png"
import Doran from "../images/doran-c.png"
import Oberyn from "../images/oberyn-c.png"
import Elia from "../images/elia-c.png"
import Rickard from "../images/rickard-c.png"
import Eddard from "../images/ed-c.png"
import Cat from "../images/cat-c.png"
import Robb from "../images/robb-c.png"
import Sansa from "../images/sansa-c.png"
import Arya from "../images/arya-c.png"
import Bran from "../images/bran-c.png"
import Jon from "../images/jon-c.png"
import Rickon from "../images/rickon-c.png"
import Roose from "../images/roose-c.png"
import Ramsay from "../images/ramsay-c.png"
import Balon from "../images/balon-c.png"
import Euron from "../images/euron-c.png"
import Yara from "../images/yara-c.png"
import Theon from "../images/theon-c.png"
import Tywin from "../images/tywin-c.png"
import Cersei from "../images/cersei-c.png"
import Jaime from "../images/jaime-c.png"
import Tyrion from "../images/tyrion-c.png"
import Mace from "../images/mace-c.png"
import Olenna from "../images/olenna-c.png"
import Margaery from "../images/margaery-c.png"
import Loras from "../images/loras-c.png"
import Hoster from "../images/hoster-c.png"
import Edmure from "../images/edmure-c.png"
import Walder from "../images/walder-c.png"
import Aerys from "../images/aerys-c.png"
import Rhaegar from "../images/rhaegar-c.png"
import Viserys from "../images/viserys-c.png"
import Daenerys from "../images/daenerys-c.png"
import Header from './Header';

class Houses extends Component {

  constructor() {
    super();

    this.state = {
      choice: "-1"
    }
  }

  setContent = (val) => {
    this.setState({
      choice: val
    });
  }

  render() {

    let houseImages = [
      {name: "Baratheon", id: "0", sig: "sigil-0", cl: "sigils"},
      {name: "Arryn", id: "1", sig: "sigil-1", cl: "sigils"},
      {name: "Martell", id: "2", sig: "sigil-2", cl: "sigils"},
      {name: "Stark", id: "3", sig: "sigil-3", cl: "sigils"},
      {name: "Bolton", id: "4", sig: "sigil-4", cl: "sigils"},
      {name: "Greyjoy", id: "5", sig: "sigil-5", cl: "sigils"},
      {name: "Lannister", id: "6", sig: "sigil-6", cl: "sigils"},
      {name: "Tyrell", id: "7", sig: "sigil-7", cl: "sigils"},
      {name: "Tully", id: "8", sig: "sigil-8", cl: "sigils"},
      {name: "Frey", id: "9", sig: "sigil-9", cl: "sigils"},
      {name: "Targaryen", id: "last-10", sig: "sigil-10", cl: "sigils"}
    ];

    let Baratheon = [
      { sigil: "sigil-0", name: "Baratheon", status: "Great House", leader: "Robert Baratheon",
      regions: "The Crownlands & Stormlands", castles: "Storm's End, Red Keep, and Dragonstone" }
    ];
    let BaratheonFamily = [
      {name: "Robert Baratheon", image: "https://i.imgur.com/EZRRQuo.png", info: `As described already, Robert is the King. He has 2 brothers, Stannis and Renly.
      He is also married to Cersei Lannister, and they have 3 children:
      Joffrey, Myrcella, and Tommen Baratheon.`},
      {name: "Joffrey Baratheon", image: "https://i.imgur.com/m98x6Vc.png", info: `The son of Robert and Cersei. Joffrey is a scumbag (if the picture didn't give it
      away) known for his arrogance and childishness. He has 2 younger siblings - Myrcella and
      Tommen.`},
      {name: "Stannis Baratheon", image: "https://i.imgur.com/ozOS6Uk.png", info: `The brother of Robert and Renly Baratheon. He is part of the Small Council.
      He is married to Selyse Baratheon and they have a daughter named Shireen.`},
      {name: "Renly Baratheon", image: "https://i.imgur.com/wYRJzSO.png", info: `The youngest of the 3 brothers who is also part of the Small Council.
      Renly has a gay relationship with Loras Tyrell, which they must keep a secret
      as homosexuality is considered a sin in the Seven Kingdoms.`}
    ]

    let Arryn = [
      { sigil: "sigil-1", name: "Arryn", status: "Great House", leader: "Jon Arryn", regions: "The Vale",
      castles: "The Eyrie" }];

    let ArrynFamily = [
      {name: "Jon Arryn", image: "https://i.imgur.com/Dipk7Sy.png", info: `The head of House Arryn and the last known Hand of the King as the series gets
      underway (spoiler alert, but not really) as he is killed just before the beginning of episode one.
      The picture on the left would be the one and only shot of him in the series.`},
      {name: "Lysa Arryn", image: "https://i.imgur.com/jNlyu5O.png", info: `Born into House Tully, Lysa married Jon during Robert's Rebellion (discussed last).
      She takes over as the ruler of House Arryn after Jon's death on behalf of her
      son, Robin, who is too young at the time for those duties.`},
      {name: "Robin Arryn", image: "https://i.imgur.com/vHTnUhr.png", info: `The son of Jon and Lysa who takes the title as ruler of House Arryn after his father
      dies. However, because of his age at the time, his mother rules on his behalf until he is old enough.`}
    ]

    let Martell = [
      { sigil: "sigil-2", name: "Martell", status: "Great House", leader: "Doran Martell",
        regions: "Dorne", castles: "Sunspear" }];

    let MartellFamily = [
      {name: "Doran Martell", image: "https://i.imgur.com/SwhOyKY.png", info: `The head of House Martell and has two siblings, Elia and Oberyn. Unlike his
      brother, Doran is much more level-headed and seldom gives in to making rash decisions as a leader.`},
      {name: "Oberyn Martell", image: "https://i.imgur.com/AIQnIQ9.png", info: `Often referred to as the Red Viper (he apparently knows a lot about poisons).
      He has two siblings, Doran and Elia. His style of combat makes him a huge threat in
      battle. He has 8 bastard daughters (4 with Ellaria Sand), referred to as the Sand Snakes.`},
      {name: "Elia Martell", image: "https://i.imgur.com/ym8JN36.png", info: `The sister of Doran and Oberyn, she is deceased before the events of the show.
      I list her here because she plays a critical role during Robert's Rebellion in what
      sets off some of the events in the series.`}
    ]

    let Stark = [
      { sigil: "sigil-3", name: "Stark", status: "Great House", leader: "Eddard Stark",
        regions: "The North", castles: "Winterfell" }];

    let StarkFamily = [
      {name: "Rickard Stark", image: "https://i.imgur.com/gd0JOZp.png", info: `The former head of House Stark until he was killed during Robert's Rebellion. He has
      4 children: Eddard, Benjen, Brandon, and Lyanna. The latter 2 played a significant role
      during Robert's Rebellion as well and are deceased as the series gets underway.`},
      {name: "Eddard Stark", image: "https://i.imgur.com/JxmxgXM.png", info: `The head of House Stark and married to Catelyn Stark, with whom he has 5 children:
      Robb, Sansa, Arya, Bran, and Rickon. He also has a bastard son, Jon Snow, who he raises in Winterfell.`},
      {name: "Catelyn Stark", image: "https://i.imgur.com/mm6hMnb.png", info: `Born into House Tully, Catelyn married Eddard during Robert's Rebellion (along with
      her sister Lysa who married into House Arryn). The two marriages were done to form an alliance between the 3 houses during their battle against the Targaryens.`},
      {name: "Jon Snow", image: "https://i.imgur.com/R5xSlki.png", info: `The bastard son of Eddard. His mother is kept secret from him and everybody else by
      Eddard. Due to his bastard status, he often feels like an outsider despite being treated well by his father and siblings. Catelyn, however, always felt
      a disconnect because he was not truly her son.`},
      {name: "Robb Stark", image: "https://i.imgur.com/RUcuehV.png", info: `The eldest son of Eddard and Catelyn. He is proficient in swordsmanship after training
      from a young age but takes after his father as more of a battle commander.`},
      {name: "Sansa Stark", image: "https://i.imgur.com/1ZNMw9q.png", info: `The eldest daughter of Eddard and Catelyn. Unlike her sister Arya, Sansa is much
      more "lady-like" in her interests and takes after her mother.`},
      {name: "Arya Stark", image: "https://i.imgur.com/LINK1Zk.png", info: `The youngest daughter of Eddard and Catelyn. In contrast to Sansa,
      Arya is a tomboy who prefers the warfare life like that of her brothers and father.`},
      {name: "Bran Stark", image: "https://i.imgur.com/4yCWQRB.png", info: `The second son of Eddard and Catelyn. He is in combat training by his father and
      brothers with the goal of one day becoming a knight.`},
      {name: "Rickon Stark", image: "https://i.imgur.com/b6jmj5E.png", info: `The youngest son of Eddard and Catelyn. Rickon is fairly young to play much of an
      importance in the beginning of the series, but keep him noted for later on in the show.`}
    ]

    let Bolton = [
      { sigil: "sigil-4", name: "Bolton", status: "Vassal", leader: "Roose Bolton",
        regions: "The North", castles: "Dreadfort" }];

    let BoltonFamily = [
      {name: "Roose Bolton", image: "https://i.imgur.com/qkrrsqM.png", info: `The head of House Bolton and father of Ramsay, his legitimized bastard son.
      He is also married to Walda Frey. `},
      {name: "Ramsay Bolton", image: "https://i.imgur.com/6tShB03.png", info: `The legitimized bastard son of Roose. He can be described as sadistic and
      cruel human being who enjoys torturing and killing others.`}
    ]

    let Greyjoy = [
      { sigil: "sigil-5", name: "Grejoy", status: "Great House", leader: "Balon Greyjoy",
        regions: "Iron Islands", castles: "Pyke" }];

    let GreyjoyFamily = [
      {name: "Balon Greyjoy", image: "https://i.imgur.com/uD0IKBR.png", info: `The head of House Greyjoy. The father of two: Yara and Theon. He also has two brothers
      in Euron and Aeron. `},
      {name: "Euron Greyjoy", image: "https://i.imgur.com/K288Dng.png", info: `The brother of Balon and Aeron and uncle to Yara and Theon. As of the beginning of
      the series, he is in exile. `},
      {name: "Yara Greyjoy", image: "https://i.imgur.com/XTMymFg.png", info: `The daughter of Balon and sister of Theon. She was raised to be a warrior - which - in the ironborn culture,
      is unusual for women. `},
      {name: "Theon Greyjoy", image: "https://i.imgur.com/2S5AWsX.png", info: `The son of Balon and brother of Yara. As of the beginning of the series, he is held
      hostage at Winterfell. `}
    ]

    let Lannister = [
      { sigil: "sigil-6", name: "Lannister", status: "Great House", leader: "Tywin Lannister",
        regions: "Westerlands", castles: "Casterly Rock" }];

    let LannisterFamily = [
      {name: "Tywin Lannister", image: "https://i.imgur.com/8uVk2DA.png", info: `The head of House Lannister. He was married to Joanna, the mother of his 3 children -
      Jaime and Cersei (twins), and Tyrion. She passed away giving birth to Tyrion.`},
      {name: "Cersei Lannister", image: "https://i.imgur.com/HJU334v.png", info: `The daughter of Tywin and Joanna, and the twin sister of Jaime. She is married to
      Robert, and they have 3 children - Joffrey, Myrcella, and Tommen Baratheon.`},
      {name: "Jaime Lannister", image: "https://i.imgur.com/J1vG1oP.png", info: `The son of Tywin and Joanna, and the twin brother of Cersei. He is referred to as
      the Kingslayer for killing the Mad King Aerys Targaryen during Robert's Rebellion.`},
      {name: "Tyrion Lannister", image: "https://i.imgur.com/i0DfEyW.png", info: `The son of Tywin and Joanna, and brother of Cersei and Jaime. Tyrion was born a dwarf.
      As a result of his mother dying while giving birth to him, he is hated by his own family
      members Cersei and Tywin. Jaime, meanwhile, has always been close with him. He loves
      drinking, by the way.`}
    ]

    let Tyrell = [
      { sigil: "sigil-7", name: "Tyrell", status: "Great House", leader: "Mace Tyrell",
        regions: "The Reach", castles: "Highgarden" }];

    let TyrellFamily = [
      {name: "Mace Tyrell", image: "https://i.imgur.com/kzIFzBC.png", info: `The head of House Tyrell and the son of Olenna. He has 2 children: Margaery and Loras.`},
      {name: "Olenna Tyrell", image: "https://i.imgur.com/n3JY4U0.png", info: `The mother of Mace. Olenna is rather witty and intelligent. Despite the title as ruler
      of House Tyrell belonging to Mace, she holds very high influence in the Reach.`},
      {name: "Margaery Tyrell", image: "https://i.imgur.com/HfiJxIl.png", info: `The daughter of Mace and sister of Loras. She is known for her beauty and cleverness
      (probably takes that from her grandmother, Olenna).`},
      {name: "Loras Tyrell", image: "https://i.imgur.com/E2lXFFf.png", info: `The son of Mace and brother of Margaery. He has a gay relationship with
      Renly Baratheon, which they must keep a secret as homosexuality is considered a sin in the Seven Kingdoms.`}
    ]

    let Tully = [
      { sigil: "sigil-8", name: "Tully", status: "Great House", leader: "Hoster Tully",
        regions: "The Riverlands", castles: "Riverrun" }];

    let TullyFamily = [
      {name: "Hoster Tully", image: "https://i.imgur.com/JEitZjc.png", info: `The head of House Tully, but mostly by title only as his health has deteriorated
      and so his son Edmure has taken over most duties. He also has 2 daughters: Catelyn and Lysa. He is never seen on-screen.`},
      {name: "Edmure Tully", image: "https://i.imgur.com/OsgV2Ln.png", info: `The son of Hoster Tully and the unofficial head of House Tully due to his
      father's health.`}
    ]

    let Frey = [
      { sigil: "sigil-9", name: "Frey", status: "Vassal", leader: "Walder Frey",
        regions: "The Riverlands", castles: "The Twins" }];

    let FreyFamily = [
      {name: "Walder Frey", image: "https://i.imgur.com/2EGVRKQ.png", info: `The head of House Frey. He has been married many times and has over two dozen
      children, and an unknown amount of bastard sons and daughters. `}
    ]

    let Targaryen = [
      { sigil: "sigil-10", name: "Targaryen", status: "Exiled Great House", leader: "Viserys Targaryen",
        regions: "None (based in the Free Cities)", castles: "None" }];

    let TargaryenFamily = [
      {name: "Aerys II Targaryen", image: "https://i.imgur.com/A6Gy1MA.png", info: `Aerys is the former King and head of House Targaryen. He married his sister Rhaella
      (Targaryens are into this sort of thing) and they had 3 children: Rhaegar, Viserys,
      and Daenerys. He was killed in the final events of Robert's Rebellion by Jamie Lannister.`},
      {name: "Rhaegar Targaryen", image: "https://i.imgur.com/uP3ruTH.png", info: `The son of the Mad King. He was married to Elia Martell but annulled it and "abducted" and
      married Lyanna Stark instead - this is what started Robert's Rebellion. He was killed by Robert Baratheon towards the end of the war.`},
      {name: "Viserys Targaryen", image: "https://i.imgur.com/mFwWGuP.png", info: `The son of the Mad King and head of the exiled House Targaryen.
      He and his sister, Daenerys, live in the Free Cities when the series kicks off.`},
      {name: "Daenerys Targaryen", image: "https://i.imgur.com/cUIg9eF.png", info: `The daughter of the Mad King. Her mother, Rhaella (while pregnant with Daenerys) fled
      to Dragonstone with Viserys after Rhaegar died. It was there that she gave birth to Daenerys
      and died soon after. Along with her brother, she was taken into exile in the Free Cities.`}
    ]


    return (
      <div>
        <Header/>
        <div className="content">
          <div id="house-cont">
            { this.state.choice === "-1" &&
              <div id="house-selecs-cont">
                <p className="miniheading">Pick a house to learn more!</p>
                <div id="house-selecs">
                  { houseImages.map(b => {
                    return <div id={b.sig} className={b.cl} key={b.id}
                      onClick={ () => this.setContent(b.id) }></div>
                  })}
                </div>
              </div>
            }
            { this.state.choice === "0" &&
                <HouseItem contentFunc={this.setContent} general={Baratheon} family={BaratheonFamily}
                note="Given that Robert Baratheon is the King, House Baratheon automatically becomes the
                Royal House. As the Royal House, they also rule the Crownlands, which is the location
                of the Iron Throne (Red Keep in King's Landing) and where the King and his/her family reside."/>
            }
            { this.state.choice === "1" &&
              <HouseItem contentFunc={this.setContent} general={Arryn} family={ArrynFamily}
              note="House Arryn has ruled over The Vale for 100s of years - well before the events
              of the show take place. Jon Arryn, as mentioned prior, is The Hand." />
            }
            { this.state.choice === "2" &&
              <HouseItem contentFunc={this.setContent} general={Martell} family={MartellFamily}
              note="House Martell has a history with House Lannister in a series of events that take
              place not long before the beginning of the show in what was called Robert's Rebellion." />
            }
            { this.state.choice === "3" &&
              <HouseItem contentFunc={this.setContent} general={Stark} family={StarkFamily}
              note="House Stark is one of the oldest houses in the Seven Kingdoms and have ruled over
              The North since the beginning of time. They are one of two houses that play a significant
              role in the series above all other houses." />
            }
            { this.state.choice === "4" &&
              <HouseItem contentFunc={this.setContent} general={Bolton} family={BoltonFamily}
              note="A vassal under House Stark, the Boltons come to play a bigger part as the show progresses.
              As their sigil shows, they are known for flaying their enimies (removing layers of skin)." />
            }
            { this.state.choice === "5" &&
              <HouseItem contentFunc={this.setContent} general={Greyjoy} family={GreyjoyFamily}
              note="The Greyjoys rule over a series of Islands on the west coast of Westeros, and their
              castle (Pyke) is located on one of these Islands of the same name - Pyke Island." />
            }
            { this.state.choice === "6" &&
              <HouseItem contentFunc={this.setContent} general={Lannister} family={LannisterFamily}
              note="House Lannister is one of the oldest and richest houses in the Seven Kingdoms. Along
              with the Starks, a significant portion of the show centers around these two Houses and their
              heated rivalry." />
            }
            { this.state.choice === "7" &&
              <HouseItem contentFunc={this.setContent} general={Tyrell} family={TyrellFamily}
              note="As of the beginning of the show, House Tyrell have sworn loyalty to Robert and House
              Baratheon after the events of Robert's Rebellion." />
            }
            { this.state.choice === "8" &&
              <HouseItem contentFunc={this.setContent} general={Tully} family={TullyFamily}
              note="House Tully has an alliance with House Stark and House Arryn through a series of
              marriages that take place during Robert's Rebellion." />
            }
            { this.state.choice === "9" &&
              <HouseItem contentFunc={this.setContent} general={Frey} family={FreyFamily}
              note="House Frey is a vassal under House Tully that comes to play a big role as the
              series progresses."/>
            }
            { this.state.choice === "last-10" &&
              <HouseItem contentFunc={this.setContent} general={Targaryen} family={TargaryenFamily}
              note="House Targaryen ruled the Seven Kingdoms for 300 years until the events of Robert's
              Rebellion resulted in their dethroning. The surviving members fled to Essos, which is where
              they reside as of the beginning of the series."/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Houses;
