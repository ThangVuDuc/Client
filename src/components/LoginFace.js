


  import React, { Component } from 'react';
  import FacebookLogin from 'react-facebook-login';
import Logined from './Logined';
  
  class Facebook extends Component {

    state = {
        isLoggedIn: true,
        facebookID: '1929382323',
        userID: '5b9798e2c685d7050ecda54a',
        name: 'Tân Hoàng Đức Thắng',
        email: 'Tanhoangducthang@gmail.com',
        picture: 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg'
    }

    responseFacebook = response => {
        console.log(response);
    }

    componentClicked = () => console.log("clicked");

    render() {
      let fbContent;
      
      if(this.state.isLoggedIn){
        fbContent = ( <Logined facebookData={this.state} modalShopIsOpen={this.props.modalShopIsOpen} />
            // <div style={{
            //     width: '400px',
            //     padding: '20px'
            // }}>
            //     <img src={this.state.picture} alt={this.state.name}/>
            //     <h2>Welcome {this.state.name}</h2>
            // </div>
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