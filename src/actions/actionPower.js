import { POWER } from '../constants';


export function powerFunc(onOff) {
    return {
        type: POWER,
        onOff
    }
}
