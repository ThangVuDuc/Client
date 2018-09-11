


import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    // componentDidMount=()=>{
    //     window.FB.getLoginStatus(this.handleSessionResponse)
    // }
    responseFacebook = response => {
        console.log(response)
        if(response.status=="unkown"){
            this.setState({isLoggedIn:false})
        }
        else{
            this.setState({isLoggedIn:true})
            this.setState({userID:response.id,name:response.name,email:response.email,picture:response.picture.data.url})
        }
    }
    handleSessionResponse=(response)=> {
        //if we dont have a session (which means the user has been logged out, redirect the user)
        if (response.status=="connected") {
            console.log(response)
        }
        else{
            console.log(response)
            window.location="/";
            return;
        }
        //if we do have a non-null response.session, call FB.logout(),
        //the JS method will log the user out of Facebook and remove any authorization cookies
        window.FB.logout(this.handleSessionResponse);
    }
    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '100px',
                    padding: '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2 style={{fontSize: 15}}>Welcome {this.state.name}</h2>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.FB.getLoginStatus(this.handleSessionResponse) }}>logout</a>
                </div>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="296596617820093"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
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