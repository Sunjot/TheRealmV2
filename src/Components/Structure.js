import React, { Component } from 'react';
import Rob from "../images/rob-c.png";
import Header from './Header';

class Structure extends Component {

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <p className="subheading">Structure</p>
          <div id="structure-cont">
            <div id="top-half">
              <div id="king-cont" className="card-shadow">
                <img src={Rob} ></img>
                <p className="miniheading">The King</p>
                <p>The Seven Kingdoms has a ruler and this person sits on the Iron Throne, which is located
                in King's Landing - the capital of the Seven Kingdoms. They hold political authority and
                have final say in all decisions, and so naturally everyone wants to be in that position.
                That point also brings me to what is the main storyline in the show - the battle for claim
                of the Iron Throne. At the start of the series, the King is Robert Baratheon (pictured).
                How he becomes King prior to the start of the series is essential knowledge and will be discussed
                in the last section.</p>
              </div>
              <div id="hand-cont" className="card-shadow">
                <p className="miniheading">The Hand</p>
                <p>The Hand is appointed by and the advisor to the King and holds the second strongest position
                  in the Seven Kingdoms. If the King is absent for whatever reason, The Hand can make decisions
                  on his/her behalf with the advice of the Small Council should they desire (who I shall discuss
                  below). As the series begins, the Hand of the King is Jon Arryn. </p>
              </div>
              <div id="council-cont" className="card-shadow">
                <p className="miniheading">The Small Council</p>
                <p>The Small Council is a group appointed by and advisor to the King and the King's Hand.
                  When decisions need to be made regarding the economy or law, the King and Hand usually get
                  together with the Small Council to consider their options. Think of the council as a
                  government cabinet. Members include: Jon Arryn (The Hand), Grand Maester Pycelle, Petyr Baelish
                  (aka Littlefinger), Varys, Renly Baratheon and Stannis Baratheon.</p>
              </div>
            </div>
            <div id="bottom-half">
              <div id="house-cont" className="card-shadow">
                <p className="miniheading">Great Houses</p>
                <p>Game of Thrones consists of hundreds of "houses", which are just different families with
                  varying lineages. Every region in the Seven Kingdoms has a house
                  that has authority over that respective region - this is referred to as a Great House. The heads
                  of these Great Houses can be considered the rulers over that region and make decisions on local matters.
                  In the next section, we'll go into detail on each of these Great Houses and the relevant
                  portions of their family trees.</p>
              </div>
              <div id="other-cont" className="card-shadow">
                <p className="miniheading">Vassals & Commoners</p>
                <p>Each of the Great Houses have vassals, which are just smaller houses that have pledged an
                  allegiance to that Great House. These vassals in turn could have their own vassals, and so on.
                  The rulers of the lower-level vassals report to the head of the vassal above them, and the heads
                  of the top layer of vassals report to the head of their Great House. At the lowest level, we
                  have what are called commoners or smallfolk - they own no land or titles. Essentially, the
                  homeless.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Structure;
