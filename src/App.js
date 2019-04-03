import React, { Component } from 'react';
import logo from './logo-fabkids.png';
import './App.css';
import Navigation from './Components/navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//NAV PAGES // 
import Home from "./Components/homepage"
import Contact from "./Components/contactus"




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <h1 className="App-title">Welcome to fabKids</h1> */}
          </header>
          <Navigation />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />

          </div>
        </div>
      </Router>
    );
  }
}

export default App;