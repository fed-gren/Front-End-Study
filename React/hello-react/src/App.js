import React, { Component } from 'react';
import MyComponent from './MyComponent';
import ScrollBox from './ScrollBox';
import Test from "./Test";

class App extends Component {
  render() {
    return (
      // <MyComponent name="EBL" age={28}/>
      <>
        <ScrollBox ref={(ref) => { this.scrollBox = ref }} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
        {/* <button onClick={this.scrollBox.scrollToBottom}>맨 밑으로</button> */}
        <Test></Test>
      </>
    );
  }
}

export default App;