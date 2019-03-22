import React, { Component } from "react";
import './Test.css';

export default class Test extends Component {
  printElement(e) {
    e.stopPropagation();
    console.log(e.target);
  };

  printWhoAmI(e) {
    e.stopPropagation();
    console.log(e.target.className);
  }

  render() {
    return (
      <div>
        <h2>onClick (Bubbling)</h2>
        <div className="great-great-grand-parents">
          <div className="great-grand-parents">
            <div className="grand-parents" onClick={this.printElement}>
              <div className="parents">
                <div className="child">
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>onClickCapture</h2>
        <div className="great-great-grand-parents">
          <div className="great-grand-parents"
            onMouseDown={()=>console.log("mouse down bubbling")}
            onMouseDownCapture={()=>console.log("mouse down capturing")}>
            <div className="grand-parents" 
              onClickCapture={this.printWhoAmI} 
              onClick={() => console.log("클릭 버블링")}>
              <div className="parents"
                onMouseOverCapture={() => console.log('mouse over capturing')}
                onMouseOver={() => console.log('mouse over bubbling')}>
                <div className="child">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <Mouse />
      </div>
    );
  }
}

class Mouse extends Component {
  render() {
    return <div>
      <div
        style={{border: '1px solid red',height:'100px'}}
        onMouseOverCapture={((event)=>{
          console.log('mouse over on capture event')
          console.dir(event, this)}).bind(this)}
        onMouseOver={((event)=>{
          console.log('mouse over on bubbling event')
          console.dir(event, this)}).bind(this)} >
          Open DevTools and move your mouse cursor over here
        </div>
    </div>
  }
}