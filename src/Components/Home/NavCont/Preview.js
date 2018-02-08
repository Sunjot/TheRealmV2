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
      linkString = `/start`
      descString = `
          A small introduction to the series if you're going in completely blind.`;
    }
    if (this.props.bid === "1") {
      linkString = `/world`
      descString = `
          Before we can dive into the details, we need to know what the world of Game of Thrones looks like.
          What are the different lands that exist and what will their importance be throughout the series?`;
    }
    if (this.props.bid === "2") {
      linkString = `/westeros`
      descString = `
          An essential introduction to the continent of Westeros, which is where a large chunk of the action will
          take place. Considering how big Westeros is and the million times the various regions will be mentioned,
          you'll definitely want to read this one over.`;
    }
    if (this.props.bid === "3") {
      linkString = `/essos`
      descString = `
          Not to be overshadowed by Westeros, Essos is another continent of importance involving some key
          characters. Just like Westeros, there are plenty of areas throughout that'll come up regularly
          through dialogue.`;
    }
    if (this.props.bid === "4") {
      linkString = `/structure`
      descString = `
          What's a commoner to a lord? What's a lord to a king? From the one with the crown down to the
          homeless guy, you probably want to know about the ranks
          and who holds authority over who in the show. It's not that complicated!`;
    }
    if (this.props.bid === "5") {
      linkString = `/houses`
      descString = `
          Alright, so there are hundreds of houses in existence, but there are a select few that are focal
          points throughout the series. We'll give a brief overview of each and mention some of the
          key family members.`;
    }
    if (this.props.bid === "6") {
      linkString = `/rebellion`
      descString = `
          In order to understand the state of the show in episode 1 and the storylines that follow, we must
          revisit a series of events known
          as Robert's Rebellion that occured about 15 years prior to the show. This will give you a solid
          understanding of where the show stands as we kick off the series premiere.`;
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
