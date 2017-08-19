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
      { name: "Introduction", short: "Intro", link: "/intro" },
      { name: "Season 1", short: "S1", link: "/s1" },
      { name: "Season 2", short: "S2", link: "/s2" },
      { name: "Season 3", short: "S3", link: "/s3" },
      { name: "Season 4", short: "S4", link: "/s4" },
      { name: "Season 5", short: "S5", link: "/intro" },
      { name: "Season 6", short: "S6", link: "/intro" }];

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
