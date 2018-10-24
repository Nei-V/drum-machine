import { PLAYED_SOUND } from '../constants';

const setThePlayedSound = (state = "Press a button", action) => {
    switch (action.type) {
        case PLAYED_SOUND:
        console.log("played song in reducerPlayedSound is",action.played);
            return action.played;
        default:
            return state;
    }
}
console.log("setThePlayedSound the result of reducer",setThePlayedSound);
export default setThePlayedSound;