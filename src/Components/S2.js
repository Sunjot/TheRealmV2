import React, { Component } from 'react';
import Header from './Pages/Header';
import Table from './Pages/Table';

class S2 extends Component {

  render() {
    let tableItems = [
      {name: "Episode 1" },
      {name: "Episode 2" },
      {name: "Episode 3" },
      {name: "Episode 4" },
      {name: "Episode 5"}
    ];

    return (
      <div className="page-container">
        <Header/>
        <div className="body-cont">
          <Table items={tableItems}/>
          <div className="content">
            <p className="subheading">Season 2</p>
          </div>
        </div>
      </div>
    );
  }
}

export default S2;