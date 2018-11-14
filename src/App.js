import React, { Component } from 'react';
//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import { connect } from 'react-redux';

import './App.css';
import Footer from './components/Footer';
//set1: RIDE, RIVER, PIERREBASIC, PIERRE, MOODY, NEWWAVE, JUMP, MAXO, FUNKY,
//set2: FAN, DRO, AAP, ZAYLEAD, TOWN, STABS, CHANGE, BELL, BOUNCE

import { chooseSetFunc } from './actions/actionChoseSet';
import { powerFunc } from './actions/actionPower';
import { typedKeyFunc } from './actions/actionTypedKey';
import { volumeFunc } from './actions/actionVolume';
import ButtonsGenerator from './components/buttonGenerator';
import ChangeSounds from './components/ChangeSounds';
import { playedSoundFunc } from './actions/actionPlayedSound';
import  Display from './components/Display';








/* not needed in order to pass the tests
class Sound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <audio id="Q" className="clip" > //you can add controls inside the audio tag to add a small player
        <source src={SET1.RIDE} type="audio/mpeg" />
      </audio>
    )
  }
}
*/

class Volume extends Component {
  constructor(props) {
    super(props);
    this.changeVolumeFunc = this.changeVolumeFunc.bind(this);
    console.log("props of volume vol", props.vol.storedState.setTheVolume);
    //let initialVolume=props.vol.storedState.setTheVolume;
  }



  changeVolumeFunc() {
    let slider = document.getElementById("volumeRange");
    console.log(slider.value);
    let volume = slider.value;
    this.props.vol.newVolume(volume);
    //console.log("the volume is ",volume);
    // console.log("storedstate in changeVolumeFunc",this.props);
  }

  render() {
    return (
      <label id="volumeToggle">Volume
      <input type="range" min="0" max="1" defaultValue={this.props.vol.storedState.setTheVolume} step="0.01" id="volumeRange" onChange={this.changeVolumeFunc} />
      </label>
    )
  }

}



class PowerToggle extends Component {
  constructor(props) {
    super(props);
    this.handleClickPower = this.handleClickPower.bind(this);
    //this.state={onOff:this.props.playerWorks.storedState.isPowered}
    this.state = { onOff: true };
    console.log("props in powerToggle", props);
  }

  handleClickPower(e) {

    console.log("previous state in handleClickPower", this.state.onOff);
    console.log("props in handleClickPower", this.props);
    //this.setState({onOff:this.props.playerWorks.storedState.isPowered});

    this.setState(previousState => ({ onOff: !previousState.onOff }));
    console.log("afterclick in handleClickPower", this.state);

    //console.log("power after click is", state.onOff) 
    this.props.playerWorks.playerOn(this.state.onOff);

  }
  render() {
    return (
      <label id="powerToggle">Power
        <input type="checkbox" onClick={this.handleClickPower} />
      </label>
    )
  }
}







class App extends Component {
  
  /* 
  constructor(props) {
    super(props);
    //this.playAudio = this.playAudio.bind(this);
    //this.playAudioOnKey = this.playAudioOnKey.bind(this);
    console.log("the props in App is,", props)
    this.state = {
      onOff: this.props.storedState.isPowered,
      audioVolume: this.props.storedState.setTheVolume
    }

  }
 */

  render() {
    return (
      <div>
        <p>Click the buttons to play or pause the audio.</p>
<Display />
      {/*   <dialog id="display" />Played Sound */}
        <br />
        <PowerToggle playerWorks={this.props} />
        <br />
        <br />
        <Volume vol={this.props} />
        <br />
        
          <ChangeSounds />
          <br />
          <ButtonsGenerator onOff={this.props.storedState.isPowered} audioVolume={this.props.storedState.setTheVolume} />
        
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )

  }
}


const mapStateToProps = (state) => {
  console.log("the state is mapstatetoprops is", state);
  return { storedState: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newVolume: (volume) => {
      console.log("volume in mapDispatch: ", volume);
      dispatch(volumeFunc(volume))
    },
    playerOn: (onOff) => {
      console.log("power in mapDispatch :", onOff);
      dispatch(powerFunc(onOff));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



{/* <Button onOff={this.props.storedState.isPowered} audioVolume={this.props.storedState.setTheVolume} />
        
        <button id="ride" onClick={this.playAudio} onKeyPress={this.playAudioOnKey} type="button" className="drum-pad">Q
            //<audio id="Q" className="clip" src={SET1.RIDE} type="audio/mpeg" />
            //<Audio />
        </button>
    
        <button id="river" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">W
            <audio id="W" className="clip" src={SET1.RIVER} type="audio/mpeg" />
        </button>
        <button id="pierrebasic" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">E
            <audio id="E" className="clip" src={SET1.PIERREBASIC} type="audio/mpeg" />
        </button>
        <button id="pierre" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">A
            <audio id="A" className="clip" src={SET1.PIERRE} type="audio/mpeg" />
        </button>
        <button id="moody" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">S
            <audio id="S" className="clip" src={SET1.MOODY} type="audio/mpeg" />
        </button>
        <button id="newwave" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">D
            <audio id="D" className="clip" src={SET1.NEWWAVE} type="audio/mpeg" />
        </button>
        <button id="jump" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">Z
            <audio id="Z" className="clip" src={SET1.JUMP} type="audio/mpeg" />
        </button>
        <button id="maxo" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">X
            <audio id="X" className="clip" src={SET1.MAXO} type="audio/mpeg" />
        </button>
        <button id="funky" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">C
           <audio id="C" className="clip" src={SET1.FUNKY} type="audio/mpeg" />
        </button> */}