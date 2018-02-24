import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop'
import './Stylesheets/App.css';
import './Stylesheets/Pages.css';
import Home from './Components/Home';
import World from './Components/World';
import Westeros from './Components/Westeros';
import Essos from './Components/Essos';
import Structure from './Components/Structure';
import Houses from './Components/Houses';
import Rebellion from './Components/Rebellion';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.checkResize = this.checkResize.bind(this);
    this.navExpand = this.navExpand.bind(this);
    this.navCollapse = this.navCollapse.bind(this);

    // by default, the menu nav is collapsed
    this.state = {
      winW: window.innerWidth,
      navToggle: '',
      menuIconVisib: 'show-mi'
    };
  }

  checkResize(e) { // sets window size everytime the window is resized
    this.setState({
      winW: window.innerWidth
    });
  }

  navExpand() { // when the menu icon is pressed, set the expand class for the menu nav and hidden class for icon
    this.setState({
      navToggle: 'expand-nav',
      menuIconVisib: 'hide-mi'
    });
  }

  navCollapse() { // when the x icon is pressed, set the collapse class for the menu nav and  show class for icon
    this.setState({
      navToggle: 'collapse-nav',
      menuIconVisib: 'show-mi'
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
      <Router>
        <ScrollToTop>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route exact path="/world" component={World}/>
            <Route exact path="/westeros" component={Westeros}/>
            <Route exact path="/essos" component={Essos}/>
            <Route exact path="/structure" component={Structure}/>
            <Route exact path="/houses" component={Houses}/>
            <Route exact path="/rebellion" component={Rebellion}/>
            { this.state.winW < 650 &&
              // once the windoww size is under 650, we want to render the menu nav for mobile use
              <div id="mobile-cont" className={this.state.navToggle}>
                <div id="headerIcon" className={this.state.menuIconVisib}>
                  <Icon.Menu color="black" size={34} onClick={() => this.navExpand()} />
                </div>
                <div id="mobile-nav">
                  <Icon.X id="close-icon" color="black" size={24} onClick={() => this.navCollapse()} />
                  { links.map(l => {
                      return <Link
                                className="header-links-m"
                                to={l.link}
                                key={l.name}
                                onClick={() => this.navCollapse()}>
                                  {l.name}
                              </Link>
                  })}
                </div>
              </div>
            }
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
