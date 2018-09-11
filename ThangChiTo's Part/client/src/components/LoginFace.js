


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

    responseFacebook = response => {
        console.log(response);
    }

    componentClicked = () => console.log("clicked");

    render() {
      let fbContent;
      
      if(this.state.isLoggedIn){
        fbContent = (
            <div style={{
                width: '400px',
                padding: '20px'
            }}>
                <img src={this.state.picture} alt={this.state.name}/>
                <h2>Welcome {this.state.name}</h2>
            </div>
        );
      }else{
          fbContent = (<FacebookLogin
            appId="296596617820093"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />);
      }

      return (
        <div>
            {fbContent}
        </div>
      );
    }
  }
  
  export default Facebook;