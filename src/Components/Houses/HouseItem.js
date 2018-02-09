import React, { Component } from 'react';
import HouseIntro from './HouseIntro';
import Family from './Family';

class HouseItem extends Component {

  constructor() {
    super();
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent() {
    this.props.contentFunc("-1");
  }

  render() {
    return (
      <div className="house-item">
        <button type="button" className="returnSelecs" onClick={this.changeContent}>Select another</button>
        <div className="houseIntroCont">
          <HouseIntro obj={this.props.general} />
          <div className="general-info">
            <p className="miniheading">Other Notes</p>
            <p>{this.props.note}</p>
          </div>
        </div>
        <div className="house-divider"></div>
        <Family obj={this.props.family} />
      </div>
    );
  }
}

export default HouseItem;
