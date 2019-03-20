/**
 * ? 앱 타이틀 컴포넌트.(함수형)
 */
import React, { Component } from 'react';

function Title() {
  const style = {
    margin: '0',
    padding: '40px 0',
    color: '#1FBD83',
    fontSize: '50px'
  }
  return (
    <h1 style={style}>Typing Practice !</h1>
  );
}

export default Title;