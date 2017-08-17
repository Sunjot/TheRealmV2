import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    let links = [
      { name: "Home", link: "/" },
      { name: "Introduction", link: "/intro" },
      { name: "Season 1", link: "/s1" },
      { name: "Season 2", link: "/s2" },
      { name: "Season 3", link: "/s3" },
      { name: "Season 4", link: "/s4" },
      { name: "Season 5", link: "/intro" },
      { name: "Season 6", link: "/intro" }];

    return (
      <div id="headerCont">
        { links.map(l => {
          return <Link className="header-links" to={l.link} key={l.name}>{l.name}</Link>
        })}
      </div>
    );
  }
}

export default Header;
