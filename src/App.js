import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Stylesheets/App.css';
import './Stylesheets/Pages.css';
import Home from './Components/Home';
import World from './Components/World';
import Westeros from './Components/Westeros';
import Essos from './Components/Essos';
import Structure from './Components/Structure';
import Houses from './Components/Houses';
import Rebellion from './Components/Rebellion';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/world" component={World}/>
          <Route exact path="/westeros" component={Westeros}/>
          <Route exact path="/essos" component={Essos}/>
          <Route exact path="/structure" component={Structure}/>
          <Route exact path="/houses" component={Houses}/>
          <Route exact path="/rebellion" component={Rebellion}/>
        </div>
      </Router>
    );
  }
}

export default App;
