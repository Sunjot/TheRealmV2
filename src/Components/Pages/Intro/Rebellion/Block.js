import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class Block extends Component {

  constructor() {
    super();
    this.activate = this.activate.bind(this);

    this.state = {
      block: "block-out"
    }
  }

  activate() {
    if (this.props.divid === "1") {
      this.setState({
        block: "block-in-left"
      })
    }
    if (this.props.divid === "2") {
      this.setState({
        block: "block-in-right"
      })
    }

  }

  render() {
    return (
      <li>
        <Waypoint
          onEnter={this.activate}
          bottomOffset="100px"
        />
        <div className={this.state.block}>
          <p className="miniheading">{this.props.title}</p>
          <p>{this.props.info}</p>
        </div>
      </li>
    );
  }
}

export default Block;
