import { PRESSED_KEY} from '../constants';

export function typedKeyFunc(pressedkey) {
    return {
        type: PRESSED_KEY,
        pressedkey
    }
}
