import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import reduxStore from './store';

ReactDOM.render(
   
<Provider store={reduxStore}>

<App />
</Provider>
, document.getElementById('drum-machine'));
registerServiceWorker();
