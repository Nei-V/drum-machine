import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.testsound = this.testsound.bind(this);
  }

  testsound() {
    let x = document.getElementById("town");
    console.log(x);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Drum Machine</h1>
        </header>
        <p className="App-intro">
          Let's play a beat
        </p>
        <div id="pads">

          <button id="town" className="Q" onClick={this.testsound()} >Q
          <audio className="clip" id="Q">
              <source src="http://s000.tinyupload.com/download.php?file_id=77751249887312113496&t=7775124988731211349651225" type="audio/mpeg" />
            </audio>
          </button>

        </div>
        <div id="controls">
        </div>
        <div id="display">
        </div>
      </div>
    );

   
  }
}


export default App;
