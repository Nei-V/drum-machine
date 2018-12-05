import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MyLocalContext } from '../context/myLocalContext';

class Display extends Component {
    render() {
        return ([
            <div className="centerDisplay">,
            <MyLocalContext.Consumer>
            {localValue => <p>{localValue.soundSet}</p>}
             </MyLocalContext.Consumer>,
         <h3>Now Playing:</h3>,
         <p id="display"> {this.props.storedState.setThePlayedSound}</p>,
         </div> ])
    }
}

const mapStateToProps = (state) => {
    return { storedState: state }
}

export default connect(mapStateToProps)(Display);