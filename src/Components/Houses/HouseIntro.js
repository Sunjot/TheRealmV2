import React, { Component } from 'react';

class HouseIntro extends Component {

  render() {
    return (
      <div className="house-intro">
          {this.props.obj.map(o => {
            return <div className="house-general">
              <p className="miniheading">
                House {o.name}
              </p>
              <p>Status: {o.status}</p>
              <p>Leader: {o.leader}</p>
              <p>Region(s): {o.regions}</p>
              <p>Castle(s): {o.castles}</p>
            </div>
          })}
      </div>
    );
  }

}

export default HouseIntro;
