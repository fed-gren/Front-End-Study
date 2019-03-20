import React, { Component } from 'react';

class BackButton extends Component {
  render() {
    const style = {
      width: '50px',
      height: '50px',
      background: '#1FBD83',
      borderRadius: '50%',
      color: 'white',
      position: 'fixed',
      right: '30px',
      bottom: '60px',
      lineHeight: '50px',
      cursor: 'pointer'
    }
    return (
      <section
       style={style}
       onClick={this.props.handleBackClick}>
        Back
      </section>
    );
  }
}

export default BackButton;