import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import FooterPage from './components/Footer';


class App extends Component {
  render() {
    return (
      <div id="main">
        <NavBar/>
        <Banner/>
        <FooterPage/>
        
      </div>
    );
  }
}

export default App;
