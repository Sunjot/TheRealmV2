import React, { Component } from 'react';
import Header from './Pages/Header';
import Table from './Pages/Table';
import Start from './Pages/Intro/Start';
import Westeros from './Pages/Intro/Westeros';
import Structure from './Pages/Intro/Structure';
import Houses from './Pages/Intro/Houses';
import Rebellion from './Pages/Intro/Rebellion';

class Intro extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      sectionClicked: <Start />
    };
  }

  handleClick(res) {

    let sec = null; // set component based on which table item was clicked
    if (res === "0") sec = <Start />;
    if (res === "1") sec = <Westeros />;
    if (res === "2") sec = <Structure />;
    if (res === "3") sec = <Houses />;
    if (res === "4") sec = <Rebellion />;

    this.setState({
      sectionClicked: sec
    });
  }

  render() {
    let tableItems = [
      {name: "Starting out", id: "0"},
      {name: "Westeros", id: "1"},
      {name: "Social structure", id: "2"},
      {name: "Houses", id: "3"},
      {name: "Robert's Rebellion", id: "4"}
    ];

    return (
      <div className="page-container">
        <Header/>
        <div className="body-cont">
          <Table items={tableItems} itemClick={this.handleClick}/>
          {this.state.sectionClicked}
        </div>
      </div>
    );
  }
}

export default Intro;
