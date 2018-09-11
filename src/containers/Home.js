import React, { Component } from 'react';
import Header from '../components/Header'
import FooterPage from '../components/FooterPage'
import HomeContent from '../components/HomeContent'
import Banner from '../components/Banner'
class home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <HomeContent/>
                <FooterPage/>
            </div>
        );
    }
}

export default home;