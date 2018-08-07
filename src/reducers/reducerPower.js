import {POWER} from '../constants';

const isPowered = (state = true, action) => {
    switch (action.type) {
        case POWER:
        console.log(action.isOn);
        return action.isOn;
        default:
        console.log(state);
        return state;
       
    }
}
console.log("isPowered",isPowered);
export default isPowered;

/*
const showText = (state = a,action) => {
    switch (action.type) {
        case NEWTEXT:
        console.log("new state");
        console.log("fullText after dispatch",action.fullText);
        return action.fullText;
        default:
        console.log("old state");
        return state;
    }
}
console.log("showText in reducer ",showText);
export default showText;
*/