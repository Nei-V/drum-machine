import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import './App.css';
import { SET1, SET2, GOODKEYS, FOOTER } from './constants';
//set1: RIDE, RIVER, PIERREBASIC, PIERRE, MOODY, NEWWAVE, JUMP, MAXO, FUNKY,
//set2: FAN, DRO, AAP, ZAYLEAD, TOWN, STABS, CHANGE, BELL, BOUNCE

import { chooseSetFunc } from './actions/actionChoseSet';
import { powerFunc } from './actions/actionPower';
import { typedKeyFunc } from './actions/actionTypedKey';
import { volumeFunc } from './actions/actionVolume';


//creating combine set

let combinedSetArray = [];
let set1Array = Object.entries(SET1);
let set2Array = Object.entries(SET2);
combinedSetArray = set1Array.concat(set2Array);
combinedSetArray.map((value) => value.unshift(combinedSetArray.indexOf(value) + 1));
for (let i = 0; i < 9; i++) {
  combinedSetArray[i].push(GOODKEYS[i + 9]);
  combinedSetArray[i + 9].push(GOODKEYS[i + 9]);
}
let arrayToObject = function (arr) {
  return {
    id: arr[0],
    name: arr[1],
    source: arr[2],
    realKey: arr[3]
  }
}

let soundsObjects = combinedSetArray.map((arr) => arrayToObject(arr));
console.log("soundsObject", soundsObjects);

//end comibined set




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

class ChangeSounds extends Component {
  constructor(props) {
    super(props);
    this.changeSoundsFunc = this.changeSoundsFunc.bind(this);
    this.state = { firstSet: true };
  }

  changeSoundsFunc(e) {
    console.log("first sound group before click: ", this.state);
    this.setState(previousState => ({ firstSet: !previousState.firstSet }))
    console.log("first sound group after click: ", this.state);
  }

  render() {
    return (
      <label id="changeSoundsButton">Change Sounds
      <input type="checkbox" onClick={this.changeSoundsFunc} />
      </label>
    )
  }
}

class Button extends Component {
  constructor(props){
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.playAudioOnKey=this.playAudioOnKey.bind(this);
    this.state={
      id:"ride",
      type:"button",
      className:"drum-pad",
      buttonText:"Q",
     }
  }

componentDidMount() {
    let button=document.getElementsByTagName("button")[0];
    console.log("the button",button);
    button.addEventListener('click', this.playAudio);
  }


  playAudio(e) {
    //{console.log("audioVolume in playAudio in button",this.state.audioVolume);}
    let onOff = this.props.onOff;
    let audioVolume = this.props.audioVolume;
    console.log("stateOfPlayer", this.props);
    console.log("onoff in playaudio", onOff);
    console.log("audio in playaudio", audioVolume);
    console.log("clicked key in playAudio in button",e);
    if (onOff) {
      let x = e.target.firstElementChild;
      x.play();
      console.log("playaudio, x is: ", x);
      console.log("the state of playaudio is:", this.props);
      x.volume = audioVolume;
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.playAudioOnKey);

  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.playAudioOnKey);
  }


  playAudioOnKey(e) {
    e.preventDefault();
    console.log("key pressed (keycode)", e);

    let z = e.key;
    console.log("z: ", z)

    if (GOODKEYS.includes(z)) {
      let uppercaselikeID = document.getElementById(z.toUpperCase());
      uppercaselikeID.volume = this.props.audioVolume;
      uppercaselikeID.play();

      console.log("keypressed in playAudio on key", uppercaselikeID);
    }
  }

render(){
  return(
   
    <button onClick={this.playAudio} onKeyPress={this.playAudioOnKey} id={this.state.id} type={this.state.type} className={this.state.className} >{this.state.buttonText}<Audio /></button>
  )
}
}


//<button id="ride" onClick={this.playAudio} onKeyPress={this.playAudioOnKey} type="button" className="drum-pad">Q </button>

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "Q",
      className: "clip",
      src: SET1.RIDE,
      type: "audio/mpeg"
    }
  }
  render() {
    return (<audio id={this.state.id} className={this.state.className} src={this.state.src} type={this.state.type} />)
  }
}




class App extends Component {
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


  render() {
    return (
      <div>
        <p>Click the buttons to play or pause the audio.</p>
        <Button onOff={this.props.storedState.isPowered} audioVolume={this.props.storedState.setTheVolume}/>
{/*}
        <button id="ride" onClick={this.playAudio} onKeyPress={this.playAudioOnKey} type="button" className="drum-pad">Q
            //<audio id="Q" className="clip" src={SET1.RIDE} type="audio/mpeg" />
            //<Audio />
        </button>
    */}
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
        </button>
        <dialog id="display" />Played Sound
        <br />
        <PowerToggle playerWorks={this.props} />
        <br />
        <ChangeSounds />
        <br />
        <Volume vol={this.props} />
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



