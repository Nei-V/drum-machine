import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reduxStore from './store';
import LocalProvider from './context/myLocalContext';


ReactDOM.render(

    <Provider store={reduxStore}>
        <LocalProvider>
            <App />
        </LocalProvider>
    </Provider>
    , document.getElementById('drum-machine'));
registerServiceWorker();
