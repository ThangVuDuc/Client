import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import logo from '../img/logo.png';
class header extends Component {
    render() {
        return (
            <nav className=' header navbar fixed-top navber-expland-lg navbar-light bg-light'>
                <div className='container' >
                    <div className='col-3'>
                        <a className='navbar-brand' href='#' >
                            <Link to="/"><span><img src={logo} className='img-logo' alt='logo' /></span></Link>
                        </a>
                    </div>
                    <div className='col-5'>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Tìm kiếm...' />
                            <div className='input-group-prepend'>
                                <button type='button' className='btn btn-secondary input-group-text'>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 text-right'>
                        <button className='btn btn-primary'>Đăng nhập bằng Facebook <i className="fab fa-facebook-square"></i></button>
                    </div>
                </div>
            </nav>
        );
    }
}

export default header;