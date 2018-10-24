import React, { Component } from 'react';

import { MyLocalContext } from '../context/myLocalContext'

import Button from './button';

import { SET1, SET2, GOODKEYS } from '../constants';
//creating combine set

let combinedSetArray = [];
let set1Array = Object.entries(SET1);
let set2Array = Object.entries(SET2);
combinedSetArray = set1Array.concat(set2Array);
combinedSetArray.map((value) => value.unshift(combinedSetArray.indexOf(value) + 1));
for (let i = 0; i < 9; i++) {
  combinedSetArray[i].push(GOODKEYS[i + 9]);
  combinedSetArray[i + 9].push(GOODKEYS[i + 9]);
}
let arrayToObject = function (arr) {
  return {
    id: arr[0],
    name: arr[1],
    source: arr[2],
    realKey: arr[3]
  }
}

let soundsObjects = combinedSetArray.map((arr) => arrayToObject(arr));
console.log("soundsObject", soundsObjects);

//end combine set



class ButtonsGenerator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MyLocalContext.Consumer>
        
        {localValue => localValue.soundSet === 'set1' ?
          (soundsObjects.slice(0, 9).map((item, i) => {
            console.log("props in slice in buttonGenerator.js", this.props);
            return [<Button tune={item.name} key={item.id} letter={item.realKey} source={item.source} onOff={this.props.onOff} audioVolume={this.props.audioVolume} />,<h1>test</h1>]
          })):
          (soundsObjects.slice(9, 18).map((item, i) => ([
          <Button tune={item.name} key={item.id} letter={item.realKey} source={item.source} onOff={this.props.onOff} audioVolume={this.props.audioVolume} />,<h1>test2</h1>])
          ))}
          </MyLocalContext.Consumer>

    );
  }
}


export default ButtonsGenerator;
