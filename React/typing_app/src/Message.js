/**
 * ? 모달 형태로 사용자에게 메시지를 전달할 컴포넌트.
 * ? props로 message(string)을 전달받는다.
 */

import React, { Component } from 'react';
import './Message.css';

class Message extends Component {

  state = {
    message: '',
    isShow: false
  }

  showMessage(text) {
    this.setState({
      message: (text ? text : "Error : No message"),
      isShow: true
    });
  }

  hideMessage() {
    this.setState({
      isShow: false
    });
  }

  render() {
    return (
      <>
        <section
          className="back"
          style={{ display: this.state.isShow ? 'block' : 'none' }}
          onClick={() => this.hideMessage()}>
        </section>
        <section
          className="messageBox"
          style={{ display: this.state.isShow ? 'block' : 'none' }}
        >
        
          <span className="messageText">
            {this.state.message}
          </span>
          <section
            className="closeBtn"
            onClick={() => this.hideMessage()}
          >close</section>
        </section>

      </>
    );
  }
}

export default Message;