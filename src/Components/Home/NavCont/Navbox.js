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
      { title: "The Known World", id: "0", short: "Wo" },
      { title: "Westeros", id: "1", short: "Wes" },
      { title: "Essos", id: "2", short: "Ess" },
      { title: "Social Structure", id: "3", short: "Str" },
      { title: "Houses", id: "4", short: "H" },
      { title: "Robert's Rebellion", id: "5", short: "Reb" }];

    return (
      <div id="navigation-cont" className="nav-prev">
        <p className="subheading">Review what you've missed</p>
        <div id="button-row">
          { buttons.map(b => { // map through title/id, create button for each
            return <button id={b.id} key={b.title} type="button"
              onClick={this.props.navClick}>{b.title}</button>
          })}
        </div>
      </div>
    );
  }
}

export default Navbox;
