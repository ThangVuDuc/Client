import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import LoginFace from './LoginFace';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar fixed-top navber-expland-lg navbar-light bg-light'>
                    <div className='container' >
                        <div className='col-3'>
                            <div className='navbar-brand' href='#' >
                                <Link to={`/`}>
                                    <span><img src={logo} className='img-logo' alt='logo' /></span>
                                </Link>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='input-group'>
                                <input type='text' className='form-control' placeholder='Tìm kiếm...' />
                                <div className='input-group-prepend'>
                                    <button type='button' className='btn btn-secondary input-group-text'>Search</button>
                                </div>
                            </div>
                        </div>
                        <LoginFace modalShopIsOpen={this.props.modalShopIsOpen} userData={this.props.userData} setdata={this.props.setdata} />
                        

                    </div>
                </nav>

            </div>

        );
    }
}

export default NavBar;