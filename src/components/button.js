import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GOODKEYS } from '../constants';
import { playedSoundFunc } from '../actions/actionPlayedSound';


class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      className: "clip",
      src: this.props.src,
      type: "audio/mpeg"
    }
  }
  render() {
    return (<audio id={this.state.id} className={this.state.className} src={this.state.src} type={this.state.type} />)
  }
}


class Button extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
    this.playAudioOnKey = this.playAudioOnKey.bind(this);
    this.state = {
      id: this.props.tune,
      type: "button",
      className: "drum-pad",
      label: this.props.letter,
      theSource: this.props.source
    }
  }

  /*  componentDidMount() {
     let button = document.getElementsByTagName("button")[0];
     console.log("the button", button);
 
     button.addEventListener('click', this.playAudio);
  
     //console.log("the button realKey", this.state.buttonText);
     //console.log("the key of the button is",this.state.key);
     console.log("props in each buton", this.props);
     console.log("state in each buton", this.state);
   } */


  playAudio(e) {
    //{console.log("audioVolume in playAudio in button",this.state.audioVolume);}
    let onOff = this.props.onOff;
    let audioVolume = this.props.audioVolume;
    console.log("stateOfPlayer", this.props);
    console.log("onoff in playaudio", onOff);
    console.log("audio in playaudio", audioVolume);
    console.log("clicked key in playAudio in button", e);
    if (onOff) {
      let x = e.target.firstElementChild;
      x.play();
      console.log("playaudio, x is: ", x);
      console.log("the props of playaudio is:", this.props);
      console.log("the pressed song is:", this.props.tune);
      x.volume = audioVolume;
      this.props.playedSound(this.props.tune);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.playAudioOnKey);
  }

  //doesn't work if I remove this lifecyclemethod "componentsDidMount" even though it exists before.



  playAudioOnKey(e) {
    let onOff = this.props.onOff;

    if (onOff) {
      //e.preventDefault();
      console.log("key pressed (keycode)", e);

      let z = e.key;
      console.log("z: ", z)

      if ((z !== "F12") && (GOODKEYS.includes(z))) {
        let uppercaselikeID = document.getElementById(z.toUpperCase());
        uppercaselikeID.volume = this.props.audioVolume;
        uppercaselikeID.play();
        this.props.playedSound(this.props.tune);
        console.log("the props when keypressed", this.props);
        console.log("the state when keypressed", this.state);
        console.log("keypressed in playAudio on key", uppercaselikeID);
      }
    }
  }

  componentWillUnmount() {

    document.removeEventListener('keydown', this.playAudioOnKey);
  }


  render() {
    return (

      <button onClick={this.playAudio} onKeyPress={this.playAudioOnKey} id={this.state.id} type={this.state.type} className={this.state.className} >{this.state.label}<Audio id={this.state.label} src={this.state.theSource} /></button>
    )
  }
}


const mapStateToProps = (state) => {
  return { storedState: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playedSound: (played) => {
      dispatch(playedSoundFunc(played))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);