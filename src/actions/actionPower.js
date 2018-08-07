import { POWER } from '../constants';

//made after the example
export const powerFunc = (onOff) => dispatch =>
{
    dispatch ({
        type: POWER,
        isOn:onOff
    })
}



/*made after redux tutorial
export function powerFunc(onOff) {
    return {
        type: POWER,
        onOff
    }
}

*/

/*example:
export const allText = (text) => dispatch => {
    console.log("text in action1 alltext : ",text);
    dispatch ({
        type: NEWTEXT,
        fullText: text
    })
}
*/