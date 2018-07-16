import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import About from './components/about/About.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <div className="content" id="content">
              <Switch>
                  <Route path="/about" component={About}/>
              </Switch>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
