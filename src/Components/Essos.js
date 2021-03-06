import React, { Component } from 'react';
import Braavos from "../images/braavos.jpg";
import Meereen from "../images/meereen.jpg";
import Dothraki from "../images/dothraki.jpg";
import Header from './Header';

class Essos extends Component {

  constructor() {
    super();

    // by default, the free cities is the active section and the underlined one
    this.state = {
      activeSub: 'sl fc-active',
      fcActive: 'ul-active',
      sbActive: '',
      dsActive: ''
    }
  }

  // when one of the 3 buttons is clicked, this method slides in the appropriate section
  // and underlines the button
  setActive = (val) => {

    let prev = "";

    // store the previously active section so we know which underline to remove when a new section is clicked
    if (this.state.fcActive === "ul-active")
      prev = "fc";
    if (this.state.sbActive === "ul-active")
      prev = "sb";
    if (this.state.dsActive === "ul-active")
      prev = "ds";

    if (val === "0") { // if free cities is clicked, set class/id to slide in that content section
      this.setState({
        activeSub: 'sl fc-active',
        fcActive: 'ul-active'
      });

      if (prev === "sb") // check the previous active section (1 of 2) and add class to remove the underline
        this.setState({ sbActive: 'no-ul' });
      else
        this.setState({ dsActive: 'no-ul' });

    }
    if (val === "1") { // if slaver's bay is clicked, set class/id to slide in that content section
      this.setState({
        activeSub: 'sl sb-active',
        sbActive: 'ul-active'
      });

      if (prev === "fc") // check the previous active section (1 of 2) and add class to remove the underline
        this.setState({ fcActive: 'no-ul' });
      else
        this.setState({ dsActive: 'no-ul' });

    }
    if (val === "2") { // if dothraki sea is clicked, set class/id to slide in that content section
      this.setState({
        activeSub: 'sl ds-active',
        dsActive: 'ul-active'
      });

      if (prev === "fc") // check the previous active section (1 of 2) and add class to remove the underline
        this.setState({ fcActive: 'no-ul' });
      else
        this.setState({ sbActive: 'no-ul' });
    }
  }

  render() {

    return (
      <div className="route-cont">
        <Header/>
        <div className="content" id="content-essos">
          <div id="desc-cont-essos">
            <p className="subheading">Essos</p>
            <p className="desc-cont">While not as relevant as Westeros, it is still essential
            that we at least briefly go over the significance of Essos in the show. If you looked at the map,
            you'll see that Essos is a very large continent. Most of it, however, has been untouched.
            The focus is going to be on 3 regions: the Free Cities, Slaver's Bay, and the Dothraki Sea.
            All of them play an important role in a long-term storyline and so we'll briefly go over each.</p>
          </div>
          <div id="essos-selecs">
            <div className="essos-ch" onClick={() => this.setActive("1")}>
              <p>Slaver's Bay</p>
              <div className={this.state.sbActive}></div>
            </div>
            <div className="essos-ch" onClick={() => this.setActive("0")}>
              <p>Free Cities</p>
              <div className={this.state.fcActive}></div>
            </div>
            <div className="essos-ch" onClick={() => this.setActive("2")}>
              <p>Dothraki Sea</p>
              <div className={this.state.dsActive}></div>
            </div>
          </div>
          <div id="essos-cont" className={this.state.activeSub}>
            <div id="slavers-cont" className="essos-subsec">
              <div className="desc-img">
                <img alt="meereen-pic" id="" src={Meereen}></img>
                <p className="desc">Okay, I lied just slightly. Some of the surviving colonies of the volcanic
                eruptions also turned into Slaver's Bay, which lies southeast of the Free Cities. There are 3 city-states
                in Slaver's Bay that are considered the most powerful and so we only need to worry about those: Meereen,
                Astapor, and Yunkai.
                <br/><br/>As the name suggests, Slaver's Bay is rampant with slavery. Well technically,
                majority of Essos is (including some of the Free Cities - Braavos being one of the exceptions).
                However, that name is given to this particular region because it is the location for the international
                slave trade.</p>
              </div>
            </div>
            <div id="free-cities-cont" className="essos-subsec">
              <div className="desc-img">
                <img alt="braavos-pic" id="" src={Braavos}></img>
                <p className="desc">The Free Cities, just like the Seven Kingdoms, is made up of 9 regions -
                each a city-state on the western end of Essos. To keep things simple as to how they came to be
                - this land was ruled by Valyrians (blonde-haired, blue-eyed individuals) and their dragons until a
                bunch of volcanic eruptions destroyed a chunk of land and their people.
                <br/><br/>
                The surviving colonies from this disaster became known as what is now the Free Cities.
                These city-states include: Braavos, Lorath, Lys, Myr, Norvos, Pentos, Qohor, Tyroth and Volantis.
                Braavos (pictured here) is the most influential of these city-states and is also the location for
                the Iron Bank of Braavos - the most powerful bank in the Known World, as it funds the Iron Throne.</p>
              </div>
            </div>
            <div id="dothraki-cont" className="essos-subsec">
              <div className="desc-img">
                <img alt="dothraki-pic" id="" src={Dothraki}></img>
                <p className="desc">It's not what you think it is. The "sea" refers to a sea of
                grass east of the Free Cities, not an actual sea. This area is run by these terrifying looking
                warriors called Dothraki's (shocker) who are mounted on horses. They don't believe in money and
                so they frequently raid other areas in search for goods. They almost solely fight while on their
                horses (they can fire bows on top of using swords/whips). Have something they want? Let them
                have it or fight to the death for it. If you've seen what these guys look like, I'd go the prior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Essos;
