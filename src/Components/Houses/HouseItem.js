import React, { Component } from 'react';
import HouseIntro from './HouseIntro';
import Family from './Family';
import * as Icon from 'react-feather';

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
        <div id="iconCont" onClick={this.changeContent}><Icon.ArrowLeftCircle color="#5a7199" size={48} /></div>
        <div className="houseIntroCont">
          <HouseIntro obj={this.props.general} />
          <div className="general-info">
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
