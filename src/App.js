import React, { Component } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import  axios from "axios";
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateShop from './Container/CreateShop';
import ShopManager from './Container/ShopManager';
import home from './components/Home';
import Shop from './Container/Shop';
import Cart from './Container/Cart';
import { ROOT_API } from "./static/index";


class App extends Component {
  state = {
    createShopModal: false,
    userData: null
  }

  componentDidMount = () => {
        axios.get(ROOT_API + "/auth/fb/isLogin")
            .then((response) => {
                console.log(response)
                // this.setState({ shops: response.data.shopFound })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

  modalShopIsOpen = () => {
    this.setState({
      createShopModal: !this.state.createShopModal
    })
  }

  _setData = (res) => {
    this.setState({
      userData: res[0]
    });
    console.log(this.state.userData)
  }

  render() {
    return (
      <BrowserRouter>
        <div id="main">
          <NavBar modalShopIsOpen={this.modalShopIsOpen} userData={this.state.userData} setdata={this._setData} />
          <Switch>
            <Route exact path='/' component={home} />
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
          <CreateShop createShopModal={this.state.createShopModal} modalShopIsOpen={this.modalShopIsOpen} userData={this.state.userData} />
          <FooterPage />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
