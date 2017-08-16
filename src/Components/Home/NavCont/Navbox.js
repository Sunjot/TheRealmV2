import React, { Component } from 'react';

class Navbox extends Component {

  constructor() {
    super();
    this.checkResize = this.checkResize.bind(this);

    this.state = {
      winW: window.innerWidth
    };
  }

  checkResize(e) {
    this.setState({
      winW: window.innerWidth
    });
  }

  // track the window size so when small enough, we switch button text to its short form
  componentDidMount() {
    window.addEventListener('resize', this.checkResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkResize);
  }

  render() {
    let buttons = [ // set the button title and id ahead of time
      { title: "Calm before the storm", id: "0", short: "Intro" },
      { title: "Season 1", id: "1", short: "S1" },
      { title: "Season 2", id: "2", short: "S2" },
      { title: "Season 3", id: "3", short: "S3" },
      { title: "Season 4", id: "4", short: "S4" },
      { title: "Season 5", id: "5", short: "S5" },
      { title: "Season 6", id: "6", short: "S6" }];

    return (
      <div id="navigation-cont" className="nav-prev">
        <p className="subheading">Start at the beginning or step into the war</p>
        <div id="button-row">
          { buttons.map(b => { // map through title/id, create button for each
            return <button id={b.id} key={b.title} type="button"
              onClick={this.props.navClick}>{this.state.winW > 650 ? b.title : b.short}</button>
          })}
        </div>
      </div>
    );
  }
}

export default Navbox;
