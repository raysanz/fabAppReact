import React, { Component } from 'react';
import logo from './logo-fabkids.png';
import './App.css';
import Navigation from './Components/navigation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselPage from "./Components/carousel"
import Home from "./Components/homepage"


const About = () => (
  <div>
    About
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)


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
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;