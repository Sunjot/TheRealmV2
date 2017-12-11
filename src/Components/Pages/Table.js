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
      /* 1 by 1, lists all the items in the table and if its the active one, 
      it gets a distinct bg color so it can be identified */
      <div className={this.props.inout}>
        {this.props.items.map(i => {

          let activeClass = "item-cont";
          if (i.id === this.state.activeItemID)
            activeClass = "item-cont active-item" // active-item class gives the new bg color

          // each table item with onclick event handler to update the active item
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
