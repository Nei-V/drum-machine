import { VOLUME } from '../constants';

const setTheVolume = (state = 0.4, action) => {
    switch (action.type) {
        case VOLUME:
            console.log("new state");
            console.log("volume after dispatch", action.volume);
            return action.volume;
        default:
            console.log("old state");
            return state;
    }
}
console.log("setTheVolume in reducer ", setTheVolume);
export default setTheVolume;