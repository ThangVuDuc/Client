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
    // componentDidMount = () => {
    //     axios.get(domain.domain + "/auth/fb/isLogin")
    //         .then((response) => {
    //             console.log(response)
    //             // this.setState({ shops: response.data.shopFound })
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
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