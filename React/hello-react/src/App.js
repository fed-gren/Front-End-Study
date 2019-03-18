import React, { Component, Fragment } from 'react';
import MyComponent from './MyComponent';
import EventPractice from "./EventPractice";

class App extends Component {
  render() {
    return (
      // <MyComponent name="EBL" age={28}/>
      <Fragment>
        <EventPractice />
      </Fragment>
    );
  }
}

export default App;