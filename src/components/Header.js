import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Facebook from './LoginFace';
import logo from '../img/logo.png';
class header extends Component {
    componentDidMount=()=>{
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll= (event)=> {
        if(window.pageYOffset>50){
            document.getElementsByClassName("header")[0].classList.add("headerBg");
        }
        else{
            document.getElementsByClassName("header")[0].classList.remove("headerBg");
        }
    }
    render() {
        return (
            <nav className=' header navbar fixed-top navber-expland-lg navbar-light bg-light'>
                <div className='container' >
                    <div className='col-3'>
                        <Link to="/"><span><img src={logo} className='img-logo' alt='logo' /></span></Link>
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
                        <Facebook />
                    </div>
                </div>
            </nav>
        );
    }
}

export default header;