import React, { Component } from 'react';
import EventPractice from './EventPractice';
import ScrollBox from './ScrollBox';
import InteractionSample from './InteractionSample';
import LifeCycleSample from './LifeCycleSample';
import Test from "./Test";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 1677215).toString(16)}`
}

class App extends Component {

  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      // <MyComponent name="EBL" age={28}/>
      <>
        <h2>Event Practice</h2>
        <EventPractice />
        <h2>ref</h2>
        <ScrollBox ref={(ref) => { this.scrollBox = ref }} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        {/* <button onClick={this.scrollBox.scrollToBottom}>맨 밑으로</button> */}
        <h2>컴포넌트 반복 - map</h2>
        <InteractionSample/>
        <h2>라이프 사이클</h2>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
        <h2>Test</h2>
        <Test />
      </>
    );
  }
}

export default App;