import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Intro extends Component {

  constructor() {
    super();
    this.growHeight = this.growHeight.bind(this);

    this.state = {
      heightClass: "height-none"
    }
  }

  growHeight() {
    this.setState({
      heightClass: "height-grow"
    })
  }

  render() {
    let dividerClasses = `divider ${this.state.heightClass}`;

    return (
      <div className="intro-cont">
        <div id="intro-sec">
          <p className="subheading">What exactly is this, you ask?</p>
          <Waypoint
            onEnter={this.growHeight}
            bottomOffset="50px"
          />
          <div className={dividerClasses}></div>
          <p id="desc">Well, as a huge Game of Thrones fan I decided to build a visual guide
          of the show that anybody could find useful. Maybe you just started
          watching the series, or you're resuming from the middle and you want to quickly catch up on
          what you've seen already. Either way, the idea
          is that this will hopefully be more entertaining than reading the plot section on
          wikipedia. I've created pages for each season, plus one as an introduction to the
          series if you've never watched before.</p>
        </div>
      </div>
    );
  }
}

export default Intro;
