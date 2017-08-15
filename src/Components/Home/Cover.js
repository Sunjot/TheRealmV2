import React, { Component } from 'react';
import cover from '../../images/got_poster_copy.jpg';

class Cover extends Component {
  render() {
    return (
      <div className="cover-img-cont">
        <div id="cover-text">
          <p id="cover-title">Welcome to The Realm</p>
          <p id="cover-desc">The Game of Thrones diary.</p>
        </div>
        <img src={cover} alt="cover"/>
      </div>
    );
  }
}

export default Cover;
