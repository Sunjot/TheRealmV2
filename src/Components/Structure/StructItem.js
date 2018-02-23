import React, { Component } from 'react';

class StructItem extends Component {

  render() {
    return (
      <div id={this.props.structid} className="struct-card">
        <p className="miniheading">{this.props.name}</p>
        <p>{this.props.info}</p>
      </div>
    );
  }
}

export default StructItem;
