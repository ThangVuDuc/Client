import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { ROOT_API } from "../static/index"
import Logined from './Logined';
class Facebook extends Component {

    state = {
        isLoggedIn: 0,
        userID: null,
        name: '',
        email: '',
        picture: '',
        user: "",
        isUpdate:false
    }
    componentDidMount = () => { 
        this.checkLogin();
    }
    
    
    checkLogin = () => {
        axios.defaults.withCredentials = true;
        axios.get(`${ROOT_API}/auth/isLogin`)
            .then((response) => {
                // console.log(response)
                if (response.data.success == 1) {
                    this.setState({ isLoggedIn: 1, userID: response.data.user })
                    this.getUser()
                }
                else this.setState({ isLoggedIn: 2 })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    getUser = () => {
        axios.defaults.withCredentials = true;
        axios.get(`${ROOT_API}/user/${this.state.userID}`)
            .then((response) => {
                // console.log(response)
                if (response.data.success == 1) {
                    this.setState({ user: response.data.user })
                    this.props.setdata(response.data.user);
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    login = () => {
        axios.defaults.withCredentials = true;
        axios.post(`${ROOT_API}/auth/login`, {
            facebookID: this.state.userID,
            name: this.state.name,
            email: this.state.email,
            avatarUrl: this.state.picture
        })
            .then((response) => {
                // console.log(response)
                this.checkLogin()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    logout = () => {
        // console.log("ok")
        window.FB.logout();
        axios.defaults.withCredentials = true;
        axios.post(`${ROOT_API}/auth/logout`)
            .then((response) => {
                // console.log(response)
                window.location = "/";
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    responseFacebook = response => { 
        // console.log(response)
        if(response.userID) {
            // console.log("dm")
            this.setState({ userID: response.id, name: response.name, email: response.email, picture: response.picture.data.url })
            this.login()
        }
    }


    render() {
        let fbContent;
        if (this.state.isLoggedIn == 1) {
            fbContent = (
                <div>
                    {(this.state.isLoggedIn == 1) ? <Logined proNu={this.props.proNu} fbLogout={this.logout} userData={this.props.userData}  modalShopIsOpen={this.props.modalShopIsOpen} /> : ''}
                </div>
            );
        }
        else if ((this.state.isLoggedIn == 2)) {
            fbContent = (<FacebookLogin
                appId="452497568573549"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={this.login}
                size='small'
                textButton='Đăng nhập với Facebook'
                cssClass= 'btn btn-primary LoginButton'
                callback={this.responseFacebook} />
            );
        }

        return (
            <div className='col-4 text-right'>
                {fbContent}
            </div>
        );
    }
}

export default Facebook;