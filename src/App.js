import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import './App.css';
import { SET1, SET2, GOODKEYS, FOOTER } from './constants';
//set1: RIDE, RIVER, PIERREBASIC, PIERRE, MOODY, NEWWAVE, JUMP, MAXO, FUNKY,
//set2: FAN, DRO, AAP, ZAYLEAD, TOWN, STABS, CHANGE, BELL, BOUNCE

import {chooseSetFunc} from './actions/actionChoseSet';
import {powerFunc} from './actions/actionPower';
import {typedKeyFunc} from './actions/actionTypedKey';
import {volumeFunc} from './actions/actionVolume';

let powerValue = true;
let soundSet= SET1;
let volume = 0.5;

class Footer extends Component {
  render() {
    function createFooter(a) {
      return { __html: a }
    }
    return (
      <div id="footerInReact" dangerouslySetInnerHTML={createFooter(FOOTER)}>
      </div>
    )
  }
}

class Sound extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <audio id="Q" className="clip">
        <source src={SET1.RIDE} type="audio/mpeg" />
      </audio>
    )
  }
}

class PowerToggle extends Component {
  constructor(props) {
    super(props);
    this.handleClickPower = this.handleClickPower.bind(this);
  }

  handleClickPower(e) {
    if (powerValue === true) {
      powerValue = false;
    }
    else {
      powerValue = true;
    }
    { console.log("power is", powerValue) }
  }
  render() {
    return (
      <label id="powerToggle">Power
        <input type="checkbox" onClick={this.handleClickPower} defaultChecked />
      </label>
    )
  }
}

class  ChangeSounds extends Component {
  constructor (props) {
    super(props);
    this.changeSoundsFunc=this.changeSoundsFunc.bind(this);
  }

  changeSoundsFunc(){
    if (soundSet===SET1){
      soundSet=SET2;
    }
    else {
      soundSet=SET1;
    }
    console.log("sound group is: ",soundSet);
  }

  render(){
    return(
      <label id="changeSoundsButton">Change Sounds
      <input type="checkbox" onClick={this.changeSoundsFunc} defaultChecked />
      </label>
    )
  }
}



class Volume extends Component {
  constructor(props) {
    super(props);
    this.changeVolumeFunc = this.changeVolumeFunc.bind(this);
  }

  changeVolumeFunc() {
    let slider = document.getElementById("volumeRange");
    slider.oninput = function () {
      volume = slider.value;
    }
    console.log("the volume is ",volume);
  }

  render() {
    return (
      <label id="volumeToggle">Volume
    <input type="range" min="0" max="1" defaultValue="0.5" step="0.01" id="volumeRange" onClick={this.changeVolumeFunc} />
      </label>
    )
  }

}


class App extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    //this.pauseAudio = this.pauseAudio.bind(this);
    this.playAudioOnKey = this.playAudioOnKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.playAudioOnKey);

  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.playAudioOnKey);
  }

  playAudio(e) {
    let x = e.target.firstElementChild;
    x.play();
    console.log("play, x is: ", x);
  }

  /*
   pauseAudio() {
     //let x=e.target.firstElementChild;
     x.pause();
     console.log("pause",x);
   }
 */

  playAudioOnKey(e) {
    e.preventDefault();
    console.log("key pressed (keycode)", e);
    let z = e.key;
    console.log("z: ", z)

    if (GOODKEYS.includes(z)) {
      let uppecaselikeID = document.getElementById(z.toUpperCase());
      uppecaselikeID.play();
      console.log(uppecaselikeID);
    }
  }


  /*
  pressButton(e){
    this.props.keyPressed(event.target.value);
    console.log(event.target.value);
  }
*/

  render() {
    return (
      <div>
        <p>Click the buttons to play or pause the audio.</p>

        <button id="ride" onClick={this.playAudio} onKeyPress={this.playAudioOnKey} className="drum-pad">Q
        <Sound />
          {/*
<audio id="Q" className="clip">
          <source src={SET1.RIDE} type="audio/mpeg" />
        </audio>
*/}
        </button>

        <button id="river" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">W
        <audio id="W" className="clip">
            <source src={SET1.RIVER} type="audio/mpeg" />
          </audio>
        </button>
        <button id="pierrebasic" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">E
        <audio id="E" className="clip">
            <source src={SET1.PIERREBASIC} type="audio/mpeg" />
          </audio></button>
        <button id="pierre" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">A
        <audio id="A" className="clip">
            <source src={SET1.PIERRE} type="audio/mpeg" />
          </audio></button>
        <button id="moody" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">S
        <audio id="S" className="clip">
            <source src={SET1.MOODY} type="audio/mpeg" />
          </audio></button>
        <button id="newwave" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">D
        <audio id="D" className="clip">
            <source src={SET1.NEWWAVE} type="audio/mpeg" />
          </audio></button>
        <button id="jump" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">Z
        <audio id="Z" className="clip">
            <source src={SET1.JUMP} type="audio/mpeg" />
          </audio></button>
        <button id="maxo" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">X
        <audio id="X" className="clip">
            <source src={SET1.MAXO} type="audio/mpeg" />
          </audio></button>
        <button id="funky" onClick={this.playAudio} onKeyDown={this.playAudioOnKey} type="button" className="drum-pad">C
        <audio id="C" className="clip">
            <source src={SET1.FUNKY} type="audio/mpeg" />
          </audio></button>
        <dialog id="display" />Played Sound
        <br />
        <PowerToggle />
        <br />
        <ChangeSounds />
        <br />
        <Volume />
        <br />
        <br />
        <Footer />
      </div>
    )

  }

}

export default App;
