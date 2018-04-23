import React, { Component } from 'react';
import logo from './logo.svg';
import './ComponentExample.css';

class ComponentExample extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2 className="App-intro">
          Hello World form "Component"!
        </h2>
      </div>
    );
  }
}

export default ComponentExample;
