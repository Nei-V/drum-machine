import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const reduxStore = createStore(rootReducer,applyMiddleware(thunk));
console.log("the store is",reduxStore);

export default reduxStore;
