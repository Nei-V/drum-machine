import {POWER} from '../constants';

const isPowered = (state = false, action) => {
    switch (action.type) {
        case POWER:
        console.log("onOff in reducer received",action.onOff);
        return action.onOff;
        default:
        console.log("onOff default in reducer",state);
        return state;
       }
};
console.log("isPowered the result of reducer",isPowered);
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