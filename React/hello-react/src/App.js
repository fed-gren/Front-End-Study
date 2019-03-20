import React, { Component } from 'react';
import EventPractice from './EventPractice';
import ScrollBox from './ScrollBox';
import InteractionSample from './InteractionSample'
import Test from "./Test";

class App extends Component {
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
        <h2>Test</h2>
        <Test></Test>
      </>
    );
  }
}

export default App;