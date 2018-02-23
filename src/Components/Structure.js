import React, { Component } from 'react';
import Header from './Header';
import StructItem from './Structure/StructItem';

class Structure extends Component {

  constructor() {
    super();

    // choice is 0 by default, which renders the king section
    // the king button is also the active one
    this.state = {
      choice: "0",
      btn0Active: "struct-btn-active",
      btn1Active: "no-act",
      btn2Active: "no-act",
      btn3Active: "no-act",
      btn4Active: "no-act"
    }
  }

  setContent = (val) => { // when a button is clicked, this function actives that section

    this.setState({ // set the content section by setting the choice state and set all buttons to inactive
      choice: val,
      btn0Active: "no-act",
      btn1Active: "no-act",
      btn2Active: "no-act",
      btn3Active: "no-act",
      btn4Active: "no-act"
    });


    if (val === "0") { // based on the section value, set the appropriate button as the active one
      this.setState({ btn0Active: "struct-btn-active" });
    }
    if (val === "1") {
      this.setState({ btn1Active: "struct-btn-active" });
    }
    if (val === "2") {
      this.setState({ btn2Active: "struct-btn-active" });
    }
    if (val === "3") {
      this.setState({ btn3Active: "struct-btn-active" });
    }
    if (val === "4") {
      this.setState({ btn4Active: "struct-btn-active" });
    }
  }

  render() {

    let king = {name: "The King", id: "king-cont", info: `The Seven Kingdoms has a ruler and this person sits on the Iron Throne, which is located
      in King's Landing - the capital of the Seven Kingdoms. They hold political authority and
      have final say in all decisions, and so naturally everyone wants to be in that position.
      That point also brings me to what is the main storyline in the show - the battle for claim
      of the Iron Throne. At the start of the series, the King is Robert Baratheon.
      How he becomes King prior to the start of the series is essential knowledge and will be discussed
      in the last section.`};

    let hand = {name: "The Hand", id: 'hand-cont', info: `The Hand is appointed by and the advisor to the King and holds the second strongest position
      in the Seven Kingdoms. If the King is absent for whatever reason, The Hand can make decisions
      on his/her behalf with the advice of the Small Council should they desire (who I shall discuss
      below). As the series begins, the Hand of the King is Jon Arryn.`};

    let council = {name: "The Small Council", id: "council-cont", info: `The Small Council is a group appointed by and advisor to the King and the King's Hand.
      When decisions need to be made regarding the economy or law, the King and Hand usually get
      together with the Small Council to consider their options. Think of the council as a
      government cabinet. Members include: Jon Arryn (The Hand), Grand Maester Pycelle, Petyr Baelish
      (aka Littlefinger), Varys, Renly Baratheon and Stannis Baratheon.`};

    let ghouse = {name: "Great Houses", id: "ghouses-cont", info: `Game of Thrones consists of hundreds of "houses", which are just different families with
      varying lineages. Every region in the Seven Kingdoms has a house
      that has authority over that respective region - this is referred to as a Great House. The heads
      of these Great Houses can be considered the rulers over that region and make decisions on local matters.
      In the next section, we'll go into detail on each of these Great Houses and the relevant
      portions of their family trees.`};

    let other = {name: "Vassals & Commoners", id: "other-cont", info: `Each of the Great Houses have vassals, which are just smaller houses that have pledged an
      allegiance to that Great House. These vassals in turn could have their own vassals, and so on.
      The rulers of the lower-level vassals report to the head of the vassal above them, and the heads
      of the top layer of vassals report to the head of their Great House. At the lowest level, we
      have what are called commoners or smallfolk - they own no land or titles. Essentially, the
      homeless.`};

    return (
      <div className="route-cont">
        <Header/>
        <div className="content">
          <div id="struct-cont-super">
            <p className="subheading">Social Structure</p>
            <div id="structure-cont">
              <div id="struct-choices">
                <button type="button" className={this.state.btn0Active} onClick={() => this.setContent("0")}>The King</button>
                <button type="button" className={this.state.btn1Active} onClick={() => this.setContent("1")}>The Hand</button>
                <button type="button" className={this.state.btn2Active} onClick={() => this.setContent("2")}>The Small Council</button>
                <button type="button" className={this.state.btn3Active} onClick={() => this.setContent("3")}>Great Houses </button>
                <button type="button" className={this.state.btn4Active} onClick={() => this.setContent("4")}>Vassals</button>
              </div>
              <div id="struct-desc">
                { this.state.choice === "0" && // conditional render the structitem component based on the button clicked
                  <StructItem name={king.name} structid={king.id} info={king.info}/>
                }
                { this.state.choice === "1" &&
                  <StructItem name={hand.name} structid={hand.id} info={hand.info}/>
                }
                { this.state.choice === "2" &&
                  <StructItem name={council.name} structid={council.id} info={council.info}/>
                }
                { this.state.choice === "3" &&
                  <StructItem name={ghouse.name} structid={ghouse.id} info={ghouse.info}/>
                }
                { this.state.choice === "4" &&
                  <StructItem name={other.name} structid={other.id} info={other.info}/>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Structure;
