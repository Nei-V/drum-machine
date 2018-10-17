import React, { Component } from 'react';
import {connect} from 'react-redux';

class Display extends Component {
    constructor(props){
            super(props);
    }

    render(){
        return (
            <p id="display">played sound from redux</p>
        )
    }
}

export default Display;