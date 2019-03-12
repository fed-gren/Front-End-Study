import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    const text = "나는야 텍스트";
    const condition = true;
    const style = {
      backgroundColor: "gray",
      border: "1px solid black",
      height: Math.floor(Math.random() * 300) + 50,
      width: Math.floor(Math.random() * 300) + 50,
      WebkitTransition: "all",
      MozTransition: "all",
      msTransition: "all"
    };

    return (
      <div className="my-div">
      {/* 요소 밖에서는 주석을 이렇게 작성합니다. */}
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          condition && '보여주세요.'
        }
        <div 
          style = {style}
          //self-closed tag에서만 작동하는 주석.
          //마지막에 꼭 />가 있어야 합니다~.
          /* 이런 주석도 가능하구랴 */
        />
        //여기 쓰는건 그대로 렌더링 됩니다.
        /* 여기선 주석을 못쓴다. */
        {
          /* {}로 감싼건 자바스크립트 표현식이니까 가능한거고요 */
          //이것도 됩니다.
      }
      </div>
    );
  }
}

export default App;
