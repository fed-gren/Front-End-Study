import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import './Typing.css';

export default class componentName extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }

  state = {
    index: 0,
    myText: ''
  }

  handleKeydown = (e) => {
    console.log(e.keyCode);
    if (16 === e.keyCode) return;
    let myTextIdx;
    let idxText;
    let string;
    if (8 === e.keyCode) {
      if (myTextIdx < 0) return;
      this.setState({
        index: this.state.index - 1,
        myText: this.state.myText.substr(0, this.state.index)
      })
      myTextIdx = this.state.index;
      idxText = this.props.text.substring(myTextIdx, myTextIdx + 1);
      console.log(`curr text : ${idxText}`);
      console.log(`string = ${this.state.myText}`);
    } else {
      this.setState({
        index: this.state.index + 1,
        myText: this.state.myText + e.key
      });
      myTextIdx = this.state.index;
      idxText = this.props.text.substring(myTextIdx, myTextIdx + 1);
      console.log(`curr text : ${idxText}`);
      console.log(`입력한 키 코드 : ${e.key}, 현재 입력해야할 문자 : ${idxText}`);
      console.log(`결과 : ${e.key === idxText}`);
      string = this.state.myText;
      console.log(`string = ${this.state.myText}`);
    }
  }

  render() {
    return (
      <div className="typing">
        <div
          className="text"
          // onKeyPress={this.handleKeydown}
          tabIndex={1}
        >
          {this.props.text}
        </div>
      </div>
    )
  }
}
