import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const reduxStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
console.log("the store is",reduxStore);

export default reduxStore;
