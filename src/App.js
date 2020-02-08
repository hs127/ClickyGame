import React, { Component } from 'react';
import Gamecard from "./components/Game.js";
import cardimage from "./components/cardimage.json";
import './App.css';

//functionality vs components
//update APP.js to a class component 
//control the state here 


class App extends Component {
  state = {
    cardimage
  };

  trackClick = id => {
    // store the id of the image click push it into an array
    //have a checker funciton for the array for the next click 

  }
  //render is a lifecycle event 
  render() {
    return (
      <div className="App">

        <Gamecard />

      </div>

    );
  }
}


export default App;
