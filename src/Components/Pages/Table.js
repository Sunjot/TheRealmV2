import React, { Component } from 'react';

class Table extends Component {

  constructor() {
    super();
    this.divClick = this.divClick.bind(this);

    this.state = {
      activeItemID: "0"
    }
  }

  divClick(res) {
    this.setState({
      activeItemID: res
    });

    this.props.itemClick(res);
  }

  render() {
    return (
      <div className="table">
        {this.props.items.map(i => {

          let activeClass = "item-cont";
          if (i.id === this.state.activeItemID)
            activeClass = "item-cont active-item"

          return <div
            className={activeClass}
            onClick={() => this.divClick(i.id) }
            key={i.id}>
            <p>{i.name}</p>
          </div>
        })}
      </div>
    );
  }
}

export default Table;
