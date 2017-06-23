import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Component 类
class App extends Component {
  // JSX是 react 的基本模板语法
  render() { //模板显示  <template>
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
