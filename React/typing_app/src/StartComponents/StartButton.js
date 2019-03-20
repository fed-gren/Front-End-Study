import React, { Component } from 'react'

export default class StartButton extends Component {

  handleClick = () => {
  }
  render() {
    const style = {
      background: '#1FBD83',
      width: '100px',
      height: '60px',
      display: 'block',
      margin: '20px auto',
      color: 'white',
      fontSize: '30px'
    }
    return (
      <>
        <button
        style={style}
        ref={(ref) => {this.startBtn = ref}}
        onClick={this.props.handleStartClick}
        >
          Start
        </button>
      </>
    )
  }
}
