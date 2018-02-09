import React, { Component } from 'react';

class Family extends Component {

  render() {
    return (
      <div className="family-members">
        <p className="miniheading" id="mems-of-house">Members</p>
        {this.props.obj.map(o => {
          return <div className="member-row">
            <img src={o.image} />
            <div className="member-info-cont">
              <p className="member-title">{o.name}</p>
              <p>{o.info}</p>
            </div>
          </div>
        })}
      </div>
    );
  }
}

export default Family;
