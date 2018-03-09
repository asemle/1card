import React, { Component } from 'react';

import cards from './cards.js';
import Img from './Img';


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
                <Img random={this.props.random}/>
                <button onClick={(event) => {event.stopPropagation(); this.props.describe()}}>?</button>
            <div id="description" className={this.props.description ? 'descappear':''}>
                <h2>{card.title}</h2>
                <p>
                {card.description}
                </p>
            </div>
        </div>
        )
    }
}