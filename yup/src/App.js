import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ValidatedLoginForm';
import ValidatedLoginForm from './ValidatedLoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ValidatedLoginForm />
      </div>
    );
  }
}

export default App;
