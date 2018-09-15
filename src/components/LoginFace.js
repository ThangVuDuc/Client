import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { ROOT_API } from "../static/index"
class Facebook extends Component {

    state = {
        isLoggedIn: 0,
        userID: null,
        name: '',
        email: '',
        picture: '',
        user: ""
    }
    componentDidMount = () => {
        this.checkLogin();
    }

    checkLogin = () => {
        axios.defaults.withCredentials = true;
        axios.get(`${ROOT_API}/auth/isLogin`)
            .then((response) => {
                console.log(response)
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
                console.log(response)
                this.checkLogin()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    logout = () => {
        console.log("ok")
        window.FB.logout();
        axios.defaults.withCredentials = true;
        axios.post(`${ROOT_API}/auth/logout`)
            .then((response) => {
                console.log(response)
                this.checkLogin()
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    responseFacebook = response => {
        console.log(response)
        if(response.userID) {
            console.log("dm")
            // this.setState({ isLoggedIn: 1 })
            this.setState({ userID: response.id, name: response.name, email: response.email, picture: response.picture.data.url })
            this.login()
        }
    }
    // handleSessionResponse = (response) => {
    //     //if we dont have a session (which means the user has been logged out, redirect the user)
    //     if (response.status == "connected") {
    //         console.log(response)
    //     }
    //     else {
    //         console.log(response)
    //         window.location = "/";
    //         return;
    //     }
    //     //if we do have a non-null response.session, call FB.logout(),
    //     //the JS method will log the user out of Facebook and remove any authorization cookies
    //     window.FB.logout(this.handleSessionResponse);
    // }
    render() {
        let fbContent;
        console.log(this.state.isLoggedIn)
        if (this.state.isLoggedIn == 1) {
            fbContent = (
                <div style={{
                    width: '100px',
                    padding: '20px'
                }}>
                    <img src={this.state.user[0]?this.state.user[0].avatarUrl:""} alt={this.state.name} />
                    <a href="#" onClick={this.logout}>logout</a>
                </div>
            );
        }
        // else if(this.state.isLoggedIn==0){

        // }
        else if ((this.state.isLoggedIn == 2)) {
            fbContent = (<FacebookLogin
                appId="452497568573549"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={this.login}
                callback={this.responseFacebook} />
            );
        }

        return (
            <div>
                {fbContent}
            </div>
        );
    }
}

export default Facebook;