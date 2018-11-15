import React, {Component} from 'react';

import { MyLocalContext } from '../context/myLocalContext';

export default () => {
  return (
  <MyLocalContext.Consumer>
    {localeVal => (
        <button id="changeSounds" onClick={localeVal.changeSounds}>changeSounds</button>
      )}
  </MyLocalContext.Consumer>
  );
};










/* 
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



<label id="changeSoundsButton">Change Sounds
      <input type="checkbox" onClick={localSoundSet.changeSounds} />
      </label> 


export default ChangeSounds; */