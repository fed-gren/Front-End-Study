import React, { Component } from 'react';
import './Keyboard.css';

export default class Keyboard extends Component {
  state = {
    beforeKey: ''
  }
  typingKeyboard = ({keyCode, location}) => {
    console.log(keyCode);
    let key = document.querySelector(`li[data-key="${keyCode}"]`);
    if(16 === keyCode) {
      key = document.querySelector(`li[data-location="${location}"]`);
    }
    console.log(key);
    key.classList.add('pressed');
    let beforeKey = this.state.beforeKey;
    if(beforeKey !== '' && beforeKey !== key) beforeKey.classList.remove('pressed');
    this.setState({
      beforeKey: key
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.typingKeyboard)
  }

  render() {
    return (
      <ul className="keyboard">
        <li className="symbol" data-key={192}><span className="off">`</span><span className="on">~</span></li>
        <li className="symbol" data-key={49}><span className="off">1</span><span className="on">!</span></li>
        <li className="symbol" data-key={50}><span className="off">2</span><span className="on">@</span></li>
        <li className="symbol" data-key={51}><span className="off">3</span><span className="on">#</span></li>
        <li className="symbol" data-key={52}><span className="off">4</span><span className="on">$</span></li>
        <li className="symbol" data-key={53}><span className="off">5</span><span className="on">%</span></li>
        <li className="symbol" data-key={54}><span className="off">6</span><span className="on">^</span></li>
        <li className="symbol" data-key={55}><span className="off">7</span><span className="on">&</span></li>
        <li className="symbol" data-key={56}><span className="off">8</span><span className="on">*</span></li>
        <li className="symbol" data-key={57}><span className="off">9</span><span className="on">(</span></li>
        <li className="symbol" data-key={48}><span className="off">0</span><span className="on">)</span></li>
        <li className="symbol" data-key={189}><span className="off">-</span><span className="on">_</span></li>
        <li className="symbol" data-key={187}><span className="off">=</span><span className="on">+</span></li>
        <li className="delete lastitem" data-key={8}>delete</li>
        <li className="tab" data-key={9}>tab</li>
        <li className="letter" data-key={81}>q</li>
        <li className="letter" data-key={87}>w</li>
        <li className="letter" data-key={69}>e</li>
        <li className="letter" data-key={82}>r</li>
        <li className="letter" data-key={84}>t</li>
        <li className="letter" data-key={89}>y</li>
        <li className="letter" data-key={85}>u</li>
        <li className="letter" data-key={73}>i</li>
        <li className="letter" data-key={79}>o</li>
        <li className="letter" data-key={80}>p</li>
        <li className="symbol" data-key={219}><span className="off">[</span><span className="on">{'{'}</span></li>
        <li className="symbol" data-key={221}><span className="off">]</span><span className="on">}</span></li>
        <li className="symbol lastitem" data-key={220}><span className="off">\</span><span className="on">|</span></li>
        <li className="capslock" data-key={20}>caps lock</li>
        <li className="letter" data-key={65}>a</li>
        <li className="letter" data-key={83}>s</li>
        <li className="letter" data-key={68}>d</li>
        <li className="letter" data-key={70}>f</li>
        <li className="letter" data-key={71}>g</li>
        <li className="letter" data-key={72}>h</li>
        <li className="letter" data-key={74}>j</li>
        <li className="letter" data-key={75}>k</li>
        <li className="letter" data-key={76}>l</li>
        <li className="symbol" data-key={186}><span className="off">;</span><span className="on">:</span></li>
        <li className="symbol" data-key={222}><span className="off">'</span><span className="on">&quot;</span></li>
        <li className="return lastitem" data-key={13}>return</li>
        <li className="left-shift" data-key={16} data-location={1}>shift</li>
        <li className="letter" data-key={90}>z</li>
        <li className="letter" data-key={88}>x</li>
        <li className="letter" data-key={67}>c</li>
        <li className="letter" data-key={86}>v</li>
        <li className="letter" data-key={66}>b</li>
        <li className="letter" data-key={78}>n</li>
        <li className="letter" data-key={77}>m</li>
        <li className="symbol" data-key={188}><span className="off">,</span><span className="on">&lt;</span></li>
        <li className="symbol" data-key={190}><span className="off">.</span><span className="on">&gt;</span></li>
        <li className="symbol" data-key={191}><span className="off">/</span><span className="on">?</span></li>
        <li className="right-shift lastitem" data-key={16} data-location={2}>shift</li>
        <li className="space lastitem" data-key={32}>&nbsp;</li>
      </ul>
    )
  }
}
