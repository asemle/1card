import React, { Component } from 'react';
import images from './images.js';

export default class Img extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        console.log(this.props.random)
        return (
            <img src={`${images['r' + this.props.random]}?${Math.floor(Math.random() * 1000)}`} alt="" />
        )
    }
}