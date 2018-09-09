import React, { Component } from 'react';
import {Container,Nav,Navbar,NavItem,NavLink,Row,Col,Form,FormGroup,Label,Input,Button} from "reactstrap" 

class ProfileSidebar extends Component {
  render() {
    return (
        <div className='profile-sidebar' id='profile-sidebarId'>
        <Nav tabs vertical>
            <NavItem>
                <NavLink href="#">Thông tin cá nhân</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Lịch sử đặt hàng</NavLink>
            </NavItem>
        </Nav>
        </div>
    );
  }
}

export default ProfileSidebar;