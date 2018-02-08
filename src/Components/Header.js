import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

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
    let links = [
      { name: "Home", short: "Home", link: "/" },
      { name: "Start", short: "St", link: "/start" },
      { name: "World", short: "Wo", link: "/world" },
      { name: "Westeros", short: "Wes", link: "/westeros" },
      { name: "Essos", short: "Es", link: "/essos" },
      { name: "Structure", short: "Str", link: "/structure" },
      { name: "Houses", short: "H", link: "/houses" },
      { name: "Rebellion", short: "Reb", link: "/rebellion" }];

    return (
      <div id="headerCont">
        { links.map(l => {
          return <Link
                    className="header-links"
                    to={l.link}
                    key={l.name}>
                      {this.state.winW > 650? l.name : l.short}
                  </Link>
        })}
      </div>
    );
  }
}

export default Header;
