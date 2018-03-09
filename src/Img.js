import React, { Component } from 'react';
import images from './images.js';

export default class Img extends Component {
    constructor(props) {
        super(props)

        this.state = {
            random: this.props.random
        }
    }
    render() {
        return (
            <img src={`${images['r' + this.props.random]}?${Math.floor(Math.random() * 1000)}`} alt="fuckyou" />
        )
    }
}