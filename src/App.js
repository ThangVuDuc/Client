import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import  axios from "axios";
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CheckOut from './components/CheckOut';
import CreateShop from './components/Container/CreateShop';
import ShopManager from './components/Container/ShopManager';
import home from './components/Home';
import Shop from './components/Container/Shop';
import Cart from './components/Container/Cart';
import { ROOT_API } from "./static/index";


class App extends Component {
  state = {
    createShopModal: false
  }

  // componentDidMount = () => {
  //       axios.get(ROOT_API + "/auth/fb/isLogin")
  //           .then((response) => {
  //               console.log(response)
  //               // this.setState({ shops: response.data.shopFound })
  //           })
  //           .catch(function (error) {
  //               console.log(error);
  //           })
  //   }

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
            <Route exact path='/' component={home} />
            <Route exact path='/checkout' render={(props) => {
              return <CheckOut {...props} />
            }} />
            <Route exact path='/shop/:id' render={(props) => {
              return <Shop {...props} />
            }} />
            <Route exact path='/shop/:id/manager' render={(props) => {
              return <ShopManager {...props} />
            }} />
            <Route exact path='/cart' render={(props) => {
              return <Cart {...props} />
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
