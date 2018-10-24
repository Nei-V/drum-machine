import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
            <p id="display">played sound from redux - {this.props.storedState.setThePlayedSound} </p>
        )
    }
}

const mapStateToProps = (state) => {
    return { storedState: state }
}

export default connect(mapStateToProps)(Display);