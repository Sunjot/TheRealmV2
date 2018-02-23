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

  checkResize(e) { // called every time the window is resized and updates window size in the state
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
      { name: "World", link: "/world" },
      { name: "Westeros", link: "/westeros" },
      { name: "Essos", link: "/essos" },
      { name: "Structure", link: "/structure" },
      { name: "Houses", link: "/houses" },
      { name: "Rebellion", link: "/rebellion" }];

    return (
      <div id="headerCont">
        <Link to="/"><div id="home-left" ></div></Link>
        <div id="headerMiddle">
          { this.state.winW > 650 &&
            links.map(l => {
              return <Link
                        className="header-links"
                        to={l.link}
                        key={l.name}>
                          {l.name}
                      </Link>
            })
          }
        </div>
      </div>
    );
  }
}

export default Header;
