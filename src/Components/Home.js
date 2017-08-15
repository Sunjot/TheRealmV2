import React, { Component } from 'react';
import '../Stylesheets/Home.css';
import Cover from './Home/Cover';
import Navbox from './Home/Navbox';
import Preview from './Home/Preview';
import Intro from './Home/Intro';
import Waypoint from 'react-waypoint';

class Home extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.floatDiv = this.floatDiv.bind(this);
    this.backPress = this.backPress.bind(this);

    this.state = {
      button_id: "-1",
      floatClass: "float-none",
    }
  }

  // track keyboard presses
  componentDidMount() {
    document.addEventListener("keydown", this.backPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.backPress);
  }

  handleClick(e) { // sets button id when button click in order to render preview component
    e.preventDefault();
    this.setState({
      button_id: e.target.id
    });
  }

  floatDiv() { // animate float in when element enters viewport
    this.setState({
      floatClass: "float-in"
    });
  }

  backPress(e) { // when user presses backspace, go from preview to navbox component
    if (this.state.button_id != "-1"){
      if (e.keyCode === 8) {
        this.setState({
          button_id: "-1"
        });
      }
    }
  }

  render() {
    return (
      <div className="home-container">
        <Cover />
        <Intro />
        <div className={this.state.floatClass}>
          <Waypoint
            onEnter={this.floatDiv}
            bottomOffset="100px"
          />
          {this.state.button_id === "-1" ? // renders correct component based on button id
            <Navbox navClick={this.handleClick}/> : <Preview navBack={this.handleClick} bid={this.state.button_id}/>
          }
        </div>
      </div>
    );
  }
}

export default Home;
