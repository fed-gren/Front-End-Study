import React, { Component } from "react";
import "./App.css";
import Typing from "./Typing";
import Keyboard from "./Keyboard";

class App extends Component {
  state = {
    text: "React is awesome"
  };

  render() {
    const typingStyle = {
      width: '600px',
      height: '400px',
      border: '1px solid black',
      fontSize: '40px'
    };

    return (
      <div 
        className="App"
      >
        <header>Typing Practice</header>
        <Typing
          style={typingStyle}
          text = 'aa'
        />
        <Keyboard />
      </div>
    );
  }
}

export default App;
