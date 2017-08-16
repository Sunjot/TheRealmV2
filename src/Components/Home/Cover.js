import React, { Component } from 'react';
import deskCover from '../../images/got_poster_copy.jpg';
import mobileCover from '../../images/got_mobile.jpg';

class Cover extends Component {

  constructor() {
    super();
    this.checkResize = this.checkResize.bind(this);
    this.setCover = this.setCover.bind(this);

    this.state = {
      winW: window.innerWidth,
      imageCover: deskCover
    };
  }

  checkResize(e) {
    this.setState({
      winW: window.innerWidth
    });
    this.setCover();
  }

  setCover() {
    if (this.state.winW < 500) {
      this.setState({
        imageCover: mobileCover
      });
    } else {
      this.setState({
        imageCover: deskCover
      });
    }
  }

  componentWillMount() { // before the component renders, set
    this.setCover();
  }

  // track the window size so when small enough, we switch button text to its short form
  componentDidMount() {
    window.addEventListener('resize', this.checkResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkResize);
  }

  render() {

    console.log("hey");
    return (
      <div className="cover-img-cont">
        <div id="cover-text">
          <p id="cover-title">Welcome to The Realm.</p>
          <p id="cover-desc">The Game of Thrones diary.</p>
        </div>
        <img src={this.state.imageCover} alt="cover"/>
      </div>
    );
  }
}

export default Cover;
