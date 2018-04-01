import React, { Component } from 'react';
import Article from './Article';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Speed Read!</h2>
        <Article />
      </div>
    );
  }
}

export default App;
