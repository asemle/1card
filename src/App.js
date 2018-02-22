import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var card = require(`./../src/cards/r${Math.floor(Math.random() * 78)}.jpg`)




class App extends Component {
  render() {
    // var x = 
    // var str = './../src/cards/r' + x +'.jpg'
    // console.log(x)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="cardBox">
          <img src={card} alt="fuckyou"/>
        </div>
      </div>
    );
  }
}

export default App;
