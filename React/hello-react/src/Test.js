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
          <div className="great-grand-parents">
            <div className="grand-parents" onClickCapture={this.printWhoAmI}>
              <div className="parents">
                <div className="child">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
