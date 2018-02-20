import React, { Component } from 'react';
import Header from './Header';

class Structure extends Component {

  constructor() {
    super();

    this.state = {
      choice: "0",
      btn0Active: "struct-btn-active",
      btn1Active: "no-act",
      btn2Active: "no-act",
      btn3Active: "no-act",
      btn4Active: "no-act"
    }
  }

  setContent = (val) => {
    this.setState({
      choice: val,
      btn0Active: "no-act",
      btn1Active: "no-act",
      btn2Active: "no-act",
      btn3Active: "no-act",
      btn4Active: "no-act"
    });


    if (val === "0") {
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
    return (
      <div>
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
                { this.state.choice === "0" &&
                  <div id="king-cont" className="struct-card">
                    <p className="miniheading">The King</p>
                    <p>The Seven Kingdoms has a ruler and this person sits on the Iron Throne, which is located
                    in King's Landing - the capital of the Seven Kingdoms. They hold political authority and
                    have final say in all decisions, and so naturally everyone wants to be in that position.
                    That point also brings me to what is the main storyline in the show - the battle for claim
                    of the Iron Throne. At the start of the series, the King is Robert Baratheon.
                    How he becomes King prior to the start of the series is essential knowledge and will be discussed
                    in the last section.</p>
                  </div>
                }
                { this.state.choice === "1" &&
                  <div id="hand-cont" className="struct-card">
                    <p className="miniheading">The Hand</p>
                    <p>The Hand is appointed by and the advisor to the King and holds the second strongest position
                      in the Seven Kingdoms. If the King is absent for whatever reason, The Hand can make decisions
                      on his/her behalf with the advice of the Small Council should they desire (who I shall discuss
                      below). As the series begins, the Hand of the King is Jon Arryn. </p>
                  </div>
                }
                { this.state.choice === "2" &&
                  <div id="council-cont" className="struct-card">
                    <p className="miniheading">The Small Council</p>
                    <p>The Small Council is a group appointed by and advisor to the King and the King's Hand.
                      When decisions need to be made regarding the economy or law, the King and Hand usually get
                      together with the Small Council to consider their options. Think of the council as a
                      government cabinet. Members include: Jon Arryn (The Hand), Grand Maester Pycelle, Petyr Baelish
                      (aka Littlefinger), Varys, Renly Baratheon and Stannis Baratheon.</p>
                  </div>
                }
                { this.state.choice === "3" &&
                  <div id="ghouse-cont" className="struct-card">
                    <p className="miniheading">Great Houses</p>
                    <p>Game of Thrones consists of hundreds of "houses", which are just different families with
                      varying lineages. Every region in the Seven Kingdoms has a house
                      that has authority over that respective region - this is referred to as a Great House. The heads
                      of these Great Houses can be considered the rulers over that region and make decisions on local matters.
                      In the next section, we'll go into detail on each of these Great Houses and the relevant
                      portions of their family trees.</p>
                  </div>
                }
                { this.state.choice === "4" &&
                  <div id="other-cont" className="struct-card">
                    <p className="miniheading">Vassals & Commoners</p>
                    <p>Each of the Great Houses have vassals, which are just smaller houses that have pledged an
                      allegiance to that Great House. These vassals in turn could have their own vassals, and so on.
                      The rulers of the lower-level vassals report to the head of the vassal above them, and the heads
                      of the top layer of vassals report to the head of their Great House. At the lowest level, we
                      have what are called commoners or smallfolk - they own no land or titles. Essentially, the
                      homeless.</p>
                  </div>
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
