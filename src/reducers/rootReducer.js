import {combineReducers} from 'redux';
import isPowered from './reducerPower';
import setTheVolume from './reducerVolume';

export default combineReducers({
    isPowered,
    setTheVolume
})