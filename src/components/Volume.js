import React, { Component } from 'react';
import { connect } from 'react-redux';
import { volumeFunc } from '../actions/actionVolume';

class Volume extends Component {
    constructor(props) {
        super(props);
        this.changeVolumeFunc = this.changeVolumeFunc.bind(this);
        console.log("props of volume vol in Vol component", props.vol.storedState.setTheVolume);
    }

    changeVolumeFunc() {
        let slider = document.getElementById("volumeRange");
        console.log("slider value in changeVolumeFunc", slider.value);
        let volume = slider.value;
        console.log("the props is in changeVolumeFunc", this.props)
        this.props.newVolume(volume);
    }

    render() {
        return (
            <div className="volume">
            <label id="volumeToggle" >Volume
            <input type="range" min="0" max="1" defaultValue={this.props.vol.storedState.setTheVolume} step="0.01" id="volumeRange" onChange={this.changeVolumeFunc} className="volume-slider"/>
            </label>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { storedState: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newVolume: (volume) => {
            console.log("volume in mapDispatch in Volume component ", volume);
            dispatch(volumeFunc(volume));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Volume);