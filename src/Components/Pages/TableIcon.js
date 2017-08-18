import React, { Component } from 'react';
import feather from 'feather-icons';

class TableIcon extends Component {

  render() {
    return (
      <div className="tableIcon" onClick={this.props.handleClick}
        dangerouslySetInnerHTML={{__html: feather.toSvg('menu')}}>
      </div>
    );
  }
}

export default TableIcon;
