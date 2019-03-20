import React, { Component } from "react";
import "./App.css";
import Title from "./StartComponents/Title";
import TextInput from "./StartComponents/TextInput";
import StartBtn from "./StartComponents/StartButton";
import Typing from "./PracticeComponents/Typing";
import Keyboard from "./PracticeComponents/Keyboard";
import BackBtn from "./PracticeComponents/BackButton";

class App extends Component {
  state = {
    text: '',
    isStart: true
  };

  handleChangeTextarea(input) {
    // let inputText = this.textInput.state.text;
    this.setState({
      text: input,
      isStart: true
    });
  };

  handleStartClick = () => {
    if (this.state.text) {
      console.log('App start!');
      console.log(this.state.text);
    } else {
      console.log("There is any text.");
      alert('연습할 텍스트를 입력해주세요!');
      return;
    }

    this.setState({
      isStart: false
    })
  };

  handleBackClick = () => {
    this.setState({
      isStart: true,
      text: ''
    })
    window.removeEventListener('keydown', this.keyboard.typingKeyboard);
    console.log("back!");
  }

  render() {
    return (
      <div
        className="App"
      >
        <Title />
        {this.state.isStart &&
          <TextInput
            style={{ display: this.state.isStart ? 'block' : 'none' }}
            ref={ref => (this.textInput = ref)}
            handleChangeTextarea={this.handleChangeTextarea.bind(this)}
          />
        }
        {this.state.isStart &&
          <StartBtn handleStartClick={this.handleStartClick.bind(this)} />
        }

        {!this.state.isStart &&
          <Typing
            text={this.state.text}
          />
        }
        {!this.state.isStart &&
          <Keyboard ref={ref => (this.keyboard = ref)}/>
        }

        {!this.state.isStart &&
          <BackBtn handleBackClick={this.handleBackClick.bind(this)}/>
        }
      </div>
    );
  }
}

export default App;
