import React, { Component } from 'react';
import '../Stylesheets/Home.css';
import Cover from './Home/Cover';
import Intro from './Home/Intro';
import NavCont from './Home/NavCont';
import Me from './Home/Me';

class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <Cover />
        <Intro />
        <NavCont />
        <Me />
      </div>
    );
  }
}

export default Home;
