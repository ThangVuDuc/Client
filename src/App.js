import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import FooterPage from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CheckOut from './components/CheckOut';
import CreateShop from './components/Container/CreateShop';
import ShopManager from './components/Container/ShopManager';


class App extends Component {
  state = {
    createShopModal: false
  }

  componentDidMount() {

  }

  modalShopIsOpen = () => {
    this.setState({
      createShopModal: !this.state.createShopModal
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <NavBar modalShopIsOpen={this.modalShopIsOpen} />
          <Switch>
            <Route exact path='/' component={Banner} />
            <Route exact path='/checkout' render={(props) => {
              return <CheckOut {...props} />
            }} />
            <Route exact path='/shop/:id/manager' render={(props) => {
              return <ShopManager {...props} />
            }} />
          </Switch>
          <CreateShop createShopModal={this.state.createShopModal} modalShopIsOpen={this.modalShopIsOpen} />
          <FooterPage />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
