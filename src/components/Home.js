import React, { Component } from 'react';
// import FooterPage from '../components/FooterPage'
import HomeContent from './HomeContent'
import Banner from './Banner'
import pic1 from '../img/banner1.jpg';
import pic2 from '../img/banner2.jpg';
import pic3 from '../img/banner3.jpg';

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