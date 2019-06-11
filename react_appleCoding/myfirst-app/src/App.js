import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <span> Hello React!</span>
        </div>
        <SecondComponent />
      </div>
    );
  }
}
class SecondComponent extends Component {
  render() {
    return (
      <div>
        <span>I am second Component</span>
      </div>
    );
  }
}
export default App;
