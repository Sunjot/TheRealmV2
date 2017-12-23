import React, { Component } from 'react';

class Houses extends Component {

  constructor() {
    super();

    this.state = {
      choice: "0"
    }
  }

  setContent(val) {
    this.setState({
      choice: val
    });
  }

  render() {

    let houseButtons = [
      {name: "", id: "0"},
      {name: "", id: "1"},
      {name: "", id: "2"},
      {name: "", id: "3"},
      {name: "", id: "4"},
      {name: "", id: "5"}
    ];

    return (
      <div className="content">
        <p className="subheading">Houses</p>
        <div id="house-selecs">
          { houseButtons.map(b => {
            return <button id={b.id} className="house-buttons"
              onClick={ () => this.setContent(b.id) }>{b.name}</button>
          })}
        </div>
        <div id="house-cont">
          { this.state.choice === "0" &&
              <p>
                0
              </p>
          }
          { this.state.choice === "1" &&
            <p>
              1
            </p>
          }
        </div>
      </div>
    );
  }
}

export default Houses;
