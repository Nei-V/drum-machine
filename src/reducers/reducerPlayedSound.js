import { PLAYED_SOUND } from '../constants';

const setThePlayedSound = (state = "Press a button", action) => {
    switch (action.type) {
        case PLAYED_SOUND:
            return action.played;
        default:
            return state;
    }
}

export default setThePlayedSound;