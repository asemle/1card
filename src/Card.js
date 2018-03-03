import React, { Component } from 'react';
import images from './images.js';
import cards from './cards.js';


export default class Card extends Component {


    render() {
        var x = this.props.random;
        var card = "";
        if(x) {
             card = cards[x - 1]
        }
        
        console.log(this.props);
        return(
        <div className="card back">
            <img src={images['r' + this.props.random]} alt="fuckyou" />
            <div className="description">
                <h2>{card.title}</h2>
                <p>
                {card.description}
                </p>
            </div>
        </div>
        )
    }
}