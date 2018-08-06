import { VOLUME } from '../constants';


export function volumeFunc(soundVolume) {
    return {
        type: VOLUME,
        soundVolume
    }
}