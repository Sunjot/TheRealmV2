import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

class Header extends Component {

  constructor() {
    super();
    this.checkResize = this.checkResize.bind(this);
    this.navExpand = this.navExpand.bind(this);
    this.navCollapse = this.navCollapse.bind(this);

    this.state = {
      winW: window.innerWidth,
      navToggle: ''
    };
  }

  checkResize(e) {
    this.setState({
      winW: window.innerWidth
    });
  }

  navExpand() {
    this.setState({
      navToggle: 'expand-nav'
    });
  }

  navCollapse() {
    this.setState({
      navToggle: 'collapse-nav'
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
      { name: "World", short: "Wo", link: "/world" },
      { name: "Westeros", short: "Wes", link: "/westeros" },
      { name: "Essos", short: "Es", link: "/essos" },
      { name: "Structure", short: "Str", link: "/structure" },
      { name: "Houses", short: "H", link: "/houses" },
      { name: "Rebellion", short: "Reb", link: "/rebellion" }];

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
          { this.state.winW < 650 &&
            <div id="mobile-cont">
              <div id="headerIcon">
                <Icon.Menu color="black" size={34} onClick={() => this.navExpand()} />
              </div>
              <div id="mobile-nav" className={this.state.navToggle}>
                <Icon.X color="black" id="close-icon" size={24} onClick={() => this.navCollapse()} />
                { links.map(l => {
                    return <Link
                              className="header-links-m"
                              to={l.link}
                              key={l.name}>
                                {l.name}
                            </Link>
                })}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Header;
