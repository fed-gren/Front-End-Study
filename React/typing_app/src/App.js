import React, { Component } from "react";
import "./App.css";
import Typing from "./Typing";

class App extends Component {
  state = {
    text: "React is awesome"
  };

  render() {
    return (
      <div 
        className="App"
      >
        <header>Typing Practice</header>
        <Typing text={this.state.text} />
      </div>
    );
  }
}

export default App;
