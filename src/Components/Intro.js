import React, { Component } from 'react';
import Header from './Pages/Header';
import Start from './Pages/Intro/Start';
import World from './Pages/Intro/World';
import Westeros from './Pages/Intro/Westeros';
import Essos from './Pages/Intro/Essos';
import Structure from './Pages/Intro/Structure';
import Houses from './Pages/Intro/Houses';
import Rebellion from './Pages/Intro/Rebellion';
import TableWrapper from './Pages/TableWrapper';

class Intro extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      sectionClicked: <Westeros />
    };
  }

  handleClick(res) {

    let sec = null; // set component based on which table item was clicked
    if (res === "0") sec = <Start />;
    if (res === "1") sec = <World />;
    if (res === "2") sec = <Westeros />;
    if (res === "3") sec = <Essos />;
    if (res === "4") sec = <Structure />;
    if (res === "5") sec = <Houses />;
    if (res === "6") sec = <Rebellion />;

    this.setState({
      sectionClicked: sec
    });
  }

  render() {
    let tableItems = [
      {name: "Starting out", id: "0"},
      {name: "The Known World", id: "1"},
      {name: "Westeros", id: "2"},
      {name: "Essos", id: "3"},
      {name: "Social structure", id: "4"},
      {name: "Houses", id: "5"},
      {name: "Robert's Rebellion", id: "6"}
    ];

    return (
      <div className="page-container">
        <Header/>
        <div className="body-cont">
          <TableWrapper items={tableItems} itemClick={this.handleClick}/>
          {this.state.sectionClicked}
        </div>
      </div>
    );
  }
}

export default Intro;
