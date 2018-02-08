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
          <p id="desc">For someone who is just getting started with Game of Thrones,
          it can be quite daunting considering the amount of information you need to consume right from the
          get-go (family trees, regions, etc). You could probably just read up on that stuff by opening Wikipedia,
          but there's so much content and it's all over the place - it may seem like a task. I made this website
          with the intention of simplifying the show as much as possible while providing the essential
          information before you dive into the series. You might be a new fan or simply revisiting some
          bits of the show that you can't recall - either way, I hope you find it useful!</p>
        </div>
      </div>
    );
  }
}

export default Intro;
