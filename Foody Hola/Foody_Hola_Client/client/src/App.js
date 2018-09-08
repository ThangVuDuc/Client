import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Test from './components/test';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Test/>
      </div>
    );
  }
}

export default App;
