import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Home from './containers/Home'
import Shop from './containers/Shop'
import Cart from './containers/Cart'
class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/shop/:id" component={Shop} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

export default App;
