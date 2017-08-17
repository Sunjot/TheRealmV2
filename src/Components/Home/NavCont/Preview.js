import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Preview extends Component {

  constructor() {
    super();

    this.state = {
      description: "",
      toLink: "/"
    }
  }

  componentWillMount() {
    let descString = ``;
    let linkString = ``;

    if (this.props.bid === "0") {
      linkString = `/intro`
      descString = `
          Well, not all that calm even before season 1 gets underway. If you're looking to read into the
          beginnings, you're at the right place.
          This section will introduce you to the world of Game of Thrones and provide you with
          every bit of knowledge you will need to get started with episode one.`;
    }
    if (this.props.bid === "1") {
      linkString = `/s1`
      descString = `
          Just starting out? We've all been there at one point or another. Doesn't take long in
          season one before some dark secrets begin to make their way out, and the consequences
          end up more severe than you can imagine.`;
    }
    if (this.props.bid === "2") {
      linkString = `/s2`
      descString = `
          A wild ride during season one, with some heart-breaking moments. Well, it doesn't get any
          better over the next ten episodes, so buckle up. The Lannisters attempt to defend the iron throne
          and we get a good look at what lies beyond the wall.`;
    }
    if (this.props.bid === "3") {
      linkString = `/s3`
      descString = `
          Didn't cry enough during season two? Not to worry! By the time you finish season three, you'll
          have enough tears to fill the great lakes. The battle for the iron throne continues, as families
          look to rebound. Sausages are eaten and regards are sent in the third season of Game of Thrones.`;
    }
    if (this.props.bid === "4") {
      linkString = `/s4`
      descString = `
          I hope you've given yourself enough time to recover after season three, because the fourth
          doesn't give you much time for anything before bringing the chaos right back. Wedding season is still
          alive and well - this time in Kings Landing. Lets just hope it doesn't end like the last one (pls).`;
    }
    if (this.props.bid === "5") {
      linkString = `/intro`
      descString = `Coming soon!`;
    }
    if (this.props.bid === "6") {
      linkString = `/intro`
      descString = `Coming soon!`;
    }

    this.setState({
      description: descString,
      toLink: linkString
    });
  }

  // renders the correct section of text from above, then adds buttons below
  render() {
    return (
      <div id="preview-cont" className="nav-prev">
        <div id="sectionDesc"><p>{this.state.description}</p></div>
        <div id="previewButtons">
          <button id="-1" type="button" onClick={this.props.navBack}>Back</button>
          <Link role="button" to={this.state.toLink}>Proceed</Link>
        </div>
      </div>
    );
  }
}

export default Preview;
