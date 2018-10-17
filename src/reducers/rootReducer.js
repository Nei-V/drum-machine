import {combineReducers} from 'redux';
import isPowered from './reducerPower';
import setTheVolume from './reducerVolume';
import setThePlayedSound from './reducerPlayedSound';

export default combineReducers({
    isPowered,
    setTheVolume,
    setThePlayedSound

})