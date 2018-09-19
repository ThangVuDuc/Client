import React, { Component } from 'react';
// import FooterPage from '../components/FooterPage'
import HomeContent from './HomeContent'
import Banner from './Banner'
import pic1 from '../img/Banner1.jpg';
import pic2 from '../img/Banner2.jpg';
import pic3 from '../img/Banner3.jpg';

class home extends Component {
    state = {
        isLogin: false,
        img:[pic1,pic2,pic3] 
    }
    render() {
        return (
            <div>
                <Banner img={this.state.img} />
                <HomeContent user={this.props.user} />
            </div>
        );
    }
}

export default home;