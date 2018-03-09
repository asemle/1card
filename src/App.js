import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'
var front = require('./../src/cards/blerp.jpg')



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      cardNumber: null,
      description: false
    }
  }
  describe() {
    this.setState({
      description: true
    })
  }
  click() {
    if(!this.state.clicked) {
      var x = Math.floor(Math.random() * 78) + 1;
      this.setState({ 
        clicked: true,
        cardNumber: x
      });
      
    } else {
      this.setState({ clicked: false,
      description: false });
    }
  }
  render() {
    
    
    // var str = './../src/cards/r' + x +'.jpg'
    
    return (
      <div className="App">
        <div className={this.state.clicked ? "clicked flip-container" : "flip-container"} onClick={this.click.bind(this)}>
          <div className="flipper">
            <div className="card front">
              <img src={front} alt="idk"/>
	        	</div>
            <Card describe={() => this.describe()}
            description={this.state.description} random={this.state.cardNumber}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
