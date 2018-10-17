import {PLAYED_SOUND} from '../constants';

export function  playedSoundFunc(played) {
    return {
        type: PLAYED_SOUND,
        played
    }
}