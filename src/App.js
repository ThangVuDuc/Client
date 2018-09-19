import React, { Component } from 'react';
import './App.css';
import 'mdbootstrap/css/mdb.min.css';
// import 'mdbootstrap/js/mdb.min.js';
// import 'mdbootstrap/js/jquery-3.3.1.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import axios from "axios";
import FooterPage from './components/FooterPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateShop from './Container/CreateShop';
import ShopManager from './Container/ShopManager';
import Home from './components/Home';
import Shop from './Container/Shop';
import Cart from './Container/Cart';
import { ROOT_API } from "./static/index";
import { getUserByIdFb } from "./networks/userData.js"
import Profile from './Container/Profile';
import { createSession, getSession } from "./networks/session"
import UserOrderHis from "./Container/UserOrderHis"
class App extends Component {
  state = {
    createShopModal: false,
    userData: null,
    isUpdate:false,
    proNu:0
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }


  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }
  //kiem tra dang nhap sau khi mount
  componentDidMount = () => {
      window.addEventListener("scroll",function(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementsByClassName("header")[0].classList.add("headerBg")
        } else {
          document.getElementsByClassName("header")[0].classList.remove("headerBg");
        }
      })
      getSession()
            .then(data => {
                this.setState({ proNu: data.data.session.order.orderList.length })
            })
            .catch(err => console.log(err))
      
  }

  //khi  chua dang nhap ma dang nhap thi thay doi state user (did update: an login xong)
  // componentDidUpdate = () => {
  //   if(!this.state.isUpdate){
  //     this.setState({isUpdate:true})
  //     axios.get(ROOT_API + "/auth/isLogin")
  //     .then((response) => {
  //       if(response.success==1){
  //         console.log("dang nhap")
  //         getUserByIdFb(response.data.user)
  //         .then(data => {
  //           this.setState({ userData: response.data.user })
  //         })
  //         .catch(err => console.log(err))
  //       }
  //       else{
  //         console.log(" chua dang nhap")
  //         this.setState({ userData: null })
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //   }
   
  // }

  modalShopIsOpen = () => {
    this.setState({
      createShopModal: !this.state.createShopModal
    })
  }


  //doan nay loi neu nguoi dung chuaw dang nhap trong navbar thi cac phan khac props.user=null
  _setData = (res) => {
    this.setState({
      userData: res[0]
    });
    console.log(this.state.userData)
  }
  changeProNu=(proNu)=>{
    this.setState({proNu})
  }
  render() { 
    return (
      <BrowserRouter>
        <div id="main">
          <NavBar  modalShopIsOpen={this.modalShopIsOpen} userData={this.state.userData} setdata={this._setData} proNu={this.state.proNu} />
          <Switch>
            <Route exact path='/' render={(props) => {
              console.log(this.state.userData)
              return <Home {...props} user={this.state.userData} /> 
            }} />
            <Route exact path='/shop/:id' render={(props) => {
              return <Shop {...props} user={this.state.userData} changeProNu={this.changeProNu} />
            }} />
            <Route exact path='/shop/:id/manager' render={(props) => {
              return <ShopManager {...props} user={this.state.userData} />
            }} />
            <Route exact path='/cart' render={(props) => {
              return <Cart {...props} user={this.state.userData} />
            }} />
            <Route exact path='/user/:id' render={(props) => {
              return <Profile {...props} user={this.state.userData} />
            }} />
            <Route exact path='/historyOrder' render={(props) => {
              return <UserOrderHis {...props}  user={this.state.userData} />
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
