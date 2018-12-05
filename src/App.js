import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/css/App.css';

import Footer from './components/Footer';
import ButtonsGenerator from './components/buttonGenerator';
import ChangeSounds from './components/ChangeSounds';
import Display from './components/Display';
import Volume from './components/Volume';
import PowerToggle from './components/PowerToggle';

class App extends Component {

  render() {
    return (
      <div>
        <p>Click the buttons to play or pause the audio.</p>
        <div id="menu">
          <Display />
          <br />
          <div id="buttons">
            <PowerToggle playerWorks={this.props} className="powerToggle" />
            <br />
            <ChangeSounds className="changeSounds" />
          </div>
          <br />
          <Volume vol={this.props} />
          <br />
          <br />
        </div>
        <div id="button-pad">
          <span id="buttonsAncestor"></span>
          <ButtonsGenerator onOff={this.props.storedState.isPowered} audioVolume={this.props.storedState.setTheVolume} />
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    )

  }
}


const mapStateToProps = (state) => {
  console.log("the state in App (the store) in mapstatetoprops is", state);
  return { storedState: state }
}

export default connect(mapStateToProps)(App);


