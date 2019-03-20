/**
 * ? 시작 시, 텍스트 입력받아서 Typing 컴포넌트에게 전달하는 컴포넌트 (직접 전달 x)
 */
import React, { Component } from 'react';

class TextInput extends Component {
  state = {
    text: ''
  }

  handleChange() {
    this.setState({
      text: this.textarea.value
    })
  }

  render() {
    const style = {
      resize: 'none',
      width: '800px',
      height: '700px',
      fontSize: '16px',
      maxLength: '1000',    //ES7은 문자열 최대 길이를 2^53 - 1로 설정(출처 : MDN)
    }

    return (
      <textarea
        ref={(ref) => (this.textarea = ref)}
        autoFocus={true}
        style={style}
        placeholder={'연습할 텍스트를 입력해주세요! (1000자 제한)'}
        onChange={() => this.props.handleChangeTextarea(this.textarea.value)}
      />
    );
  }
}

export default TextInput;