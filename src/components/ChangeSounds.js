import React from 'react';

import { MyLocalContext } from '../context/myLocalContext';

export default () => {
  return (
    <MyLocalContext.Consumer>
      {localeVal => (
        <button id="changeSounds" className="sound-set-toggle" onClick={localeVal.changeSounds}>changeSounds</button>
      )}
    </MyLocalContext.Consumer>
  );
};