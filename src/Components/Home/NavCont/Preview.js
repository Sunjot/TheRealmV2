import React, { Component } from 'react';

class Preview extends Component {

  // based on button id set dependent on button click, return correct text
  selectSection(props) {
    if (this.props.bid === "0") {
      return (
        <p>
          Well, not all that calm even before season 1 gets underway. If you're looking to read into the
          beginnings, you're at the right place.
          This section will introduce you to the world of Game of Thrones and provide you with
          every bit of knowledge you will need to get started with episode one.
        </p>
      );
    }
    if (this.props.bid === "1") {
      return (
        <p>
          Just starting out? We've all been there at one point or another. Doesn't take long in
          season one before some dark secrets begin to make their way out, and the consequences
          end up more severe than you can imagine.
        </p>
      )
    }
    if (this.props.bid === "2") {
      return (
        <p>
          A wild ride during season one, with some heart-breaking moments. Well, it doesn't get any
          better over the next ten episodes, so buckle up. The Lannisters attempt to defend the iron throne
          and we get a good look at what lies beyond the wall.
        </p>
      )
    }
    if (this.props.bid === "3") {
      return (
        <p>
          Didn't cry enough during season two? Not to worry! By the time you finish season three, you'll
          have enough tears to fill the great lakes. The battle for the iron throne continues, as families
          look to rebound. Sausages are eaten and regards are sent in the third season of Game of Thrones.
        </p>
      )
    }
    if (this.props.bid === "4") {
      return (
        <p>
          I hope you've given yourself enough time to recover after season three, because the fourth
          doesn't give you much time for anything before bringing the chaos right back. Wedding season is still
          alive and well - this time in Kings Landing. Lets just hope it doesn't end like the last one (pls).
        </p>
      )
    }
    if (this.props.bid === "5") {
      return (
        <p>
          Coming soon!
        </p>
      )
    }
    if (this.props.bid === "6") {
      return (
        <p>
          Coming soon!
        </p>
      )
    }
  }

  // renders the correct section of text from above, then adds buttons below
  render() {
    return (
      <div id="preview-cont" className="nav-prev">
        <div id="sectionDesc">{ this.selectSection() }</div>
        <div id="previewButtons">
          <button id="-1" type="button" onClick={this.props.navBack}>Back</button>
          <button type="button">Proceed</button>
        </div>
      </div>
    );
  }
}

export default Preview;
