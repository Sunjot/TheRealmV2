import React, { Component } from 'react';

class HouseIntro extends Component {

  render() {
    return (
      <div className="house-intro">
        <div id={this.props.sigil} className="sigils"></div>
        <div className="house-general">
          <p className="miniheading">
            House {this.props.name}
          </p>
          <p>Status: {this.props.status}</p>
          <p>Leader: {this.props.leader}</p>
          <p>Region(s): {this.props.regions}</p>
          <p>Castle(s): {this.props.castles}</p>
        </div>
      </div>
    );
  }

}

export default HouseIntro;
