import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MyLocalContext } from '../context/myLocalContext';

class Display extends Component {
    render() {
        return ([
            <div className="centerDisplay" key={`centerDisplay`}>
                <MyLocalContext.Consumer key="Consumer">
                    {localValue => <p className="soundSet" key="soundSet">{localValue.soundSet}</p>}
                </MyLocalContext.Consumer>
                <h3 className="nowPlaying" key={`nowPlaying`}>Now Playing:</h3>
                <p id="display" className="pressAButton" key={`pressAButton`}> {this.props.storedState.setThePlayedSound}</p>
            </div>])
    }
}

const mapStateToProps = (state) => {
    return { storedState: state }
}

export default connect(mapStateToProps)(Display);