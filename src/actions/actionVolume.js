import { VOLUME } from '../constants';


export function volumeFunc(volume) {
    return {
        type: VOLUME,
        volume
    }
}

/* to check what's the different

export const volumeFunc = (volume) => dispatch => {
    console.log("volume level is : ",volume);
    dispatch ({
        type: VOLUME,
        fullText: volume
    })
}

*/