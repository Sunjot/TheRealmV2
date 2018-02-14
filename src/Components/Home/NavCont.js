import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import Navbox from './NavCont/Navbox';
import Preview from './NavCont/Preview';

class NavCont extends Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.backPress = this.backPress.bind(this);

    this.state = {
      button_id: "-1"
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

  backPress(e) { // when user presses backspace, go from preview to navbox component
    if (this.state.button_id !== "-1"){
      if (e.keyCode === 8) {
        this.setState({
          button_id: "-1"
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Waypoint
          onEnter={this.floatDiv}
          bottomOffset="100px"
        />
        {this.state.button_id === "-1" ? // renders correct component based on button id
          <Navbox navClick={this.handleClick}/> : <Preview navBack={this.handleClick} bid={this.state.button_id}/>
        }
      </div>
    );
  }
}

export default NavCont;
