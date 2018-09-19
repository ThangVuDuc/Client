import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import LoginFace from './LoginFace';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return ( 
            <div>
                <nav className='navbar header fixed-top navber-expland-lg navbar-light'>
                    <div className='container' >
                        <div className='col-4'>
<<<<<<< HEAD
                            <div className='input-group'>
=======
                            <div className='input-group mt-3'>
>>>>>>> MInhDuc
                                <p style={{width: '100%',color:'rgb(48, 48, 48)',marginBottom: 5}} >Hotline: 0123456789</p>
                                <p style={{width: '100%',color:'rgb(48, 48, 48)'}}>Địa chỉ: Thắng béo</p>
                            </div> 
                        </div>
                        <div className='col-3'>
                            <div className='navbar-brand' href='#' >
                                <Link to={`/`}>
                                    <span><img src={logo} className='img-logo' alt='logo' /></span>
                                </Link>
                            </div> 
                        </div>
<<<<<<< HEAD
                        <LoginFace proNu={this.props.proNu}  modalShopIsOpen={this.props.modalShopIsOpen} userData={this.props.userData} setdata={this.props.setdata} />
=======
                        <LoginFace  modalShopIsOpen={this.props.modalShopIsOpen} userData={this.props.userData} setdata={this.props.setdata} />
>>>>>>> MInhDuc
                        

                    </div>
                </nav>

            </div>

        );
    }
}

export default NavBar;