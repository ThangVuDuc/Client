import React, { Component } from 'react';
// import FooterPage from '../components/FooterPage'
import HomeContent from './HomeContent'
import Banner from './Banner'
import axios from "axios"
// import domain from "../domainBE"

class home extends Component {
    state = {
        isLogin: false
    }

    render() {
        return (
            <div>
                <Banner />
                <HomeContent />
            </div>
        );
    }
}

export default home;