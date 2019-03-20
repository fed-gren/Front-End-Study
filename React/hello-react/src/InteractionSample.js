import React, { Component } from 'react';

class InteractionSample extends Component {

  state = {
    colors: ['blue', 'red', 'orange', 'gray'],
    color: ''
  };

  handleChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }

  handleInsert = () => {
    //colors 배열에 값 추가 후 color 초기화
    this.setState({
      colors: this.state.colors.concat(this.state.color),
      color: ''
    });
  }

  handleRemove = (index) => {
    const { colors } = this.state;

    this.setState({
      // colors: [
      //   ...colors.slice(0, index),
      //   ...colors.slice(index + 1, colors.length)
      // ]
      colors: colors.filter((item, i) => i !== index)
    });
  }

  render() {
    const colorList = this.state.colors.map(
      (name, index) => (
        <li
          key={index}
          onDoubleClick={() => this.handleRemove(index)}>
          {name}
        </li>
      )
    );
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.color} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {colorList}
        </ul>
      </>
    );
  }
}

export default InteractionSample;