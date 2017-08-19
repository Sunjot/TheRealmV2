import React, { Component } from 'react';
import TableIcon from './TableIcon';
import Table from './Table';

class TableWrapper extends Component {

  constructor() {
    super();
    this.tableInOut = this.tableInOut.bind(this);
    this.openClose = this.openClose.bind(this);

    this.state = {
      table: "table"
    }
  }

  tableInOut() {
    let val = "";
    if (this.state.table === "table collapse" || this.state.table === "table")
      val = "table expand";
    else
      val = "table collapse";

    this.setState({
      table: val
    });
  }

  openClose(res) {
    this.props.itemClick(res);
    this.tableInOut();
  }

  render() {
    return (
      <div id="table-wrap">
        <TableIcon handleClick={this.tableInOut}/>
        <Table inout={this.state.table} items={this.props.items} itemClick={this.openClose}/>
      </div>
    );
  }
}

export default TableWrapper;
