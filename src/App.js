import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mp3_file from './town.mp3';

class App extends Component{
    constructor (props) {
      super (props);
     // this.pressButton=this.pressButton.bind(this);
     this.playAudio=this.playAudio.bind(this);
     this.pauseAudio=this.pauseAudio.bind(this);
    }

    playAudio() { 
      let x = document.getElementById("myAudio"); 
      x.play(); 
      console.log("play, x is: ",x);
  } 
  
  pauseAudio() { 
    let x = document.getElementById("myAudio"); 
      x.pause(); 
      console.log("pause");
  } 
   
  

    /*
    pressButton(e){
      this.props.keyPressed(event.target.value);
      console.log(event.target.value);
    }
*/



    render(){

      
     
  
     
      return(
        <div>
          <p>Click the buttons to play or pause the audio.</p>
          <button onClick={this.playAudio} type="button">Play Audio</button>
  <button onClick={this.pauseAudio} type="button">Pause Audio</button> 
<audio id="myAudio">
  <source src="https://res.cloudinary.com/dg45lvfuu/video/upload/v1533156862/sounds/town.mp3" type="audio/mpeg" />
</audio>

          </div>
      )
    
  }

  /*

  
  
  
  
  <script>
  
  </script>

  */
}

export default App;
