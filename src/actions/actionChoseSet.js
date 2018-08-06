import { CHOSEN_SET} from '../constants';

export function chooseSetFunc(set1set2) {
    return {
        type: CHOSEN_SET,
        set1set2
    }
}
