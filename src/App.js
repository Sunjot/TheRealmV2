import React, { Component } from 'react';
import './Stylesheets/App.css';
import './Stylesheets/Pages.css';
import Home from './Components/Home';
import Intro from './Components/Intro';
import S1 from './Components/S1';
import S2 from './Components/S2';
import S3 from './Components/S3';
import S4 from './Components/S4';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/intro" component={Intro}/>
          <Route exact path="/s1" component={S1}/>
          <Route exact path="/s2" component={S2}/>
          <Route exact path="/s3" component={S3}/>
          <Route exact path="/s4" component={S4}/>
        </div>
      </Router>
    );
  }
}

export default App;
