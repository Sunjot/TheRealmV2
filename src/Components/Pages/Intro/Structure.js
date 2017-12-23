import React, { Component } from 'react';
import Rob from "../../../images/rob-c.png"

class Structure extends Component {

  render() {
    return (
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
        </div>
      </div>
    );
  }
}

export default Structure;
