import React, { Component } from 'react';
import Header from '../components/Header'
import FooterPage from '../components/FooterPage'
import HomeContent from '../components/HomeContent'
import Banner from '../components/Banner'
import axios from "axios"
import domain from "../domainBE"

class home extends Component {
    state = {
        isLogin: false
    }
    componentDidMount = () => {
        axios.get(domain.domain + "/auth/fb/isLogin")
            .then((response) => {
                console.log(response)
                // this.setState({ shops: response.data.shopFound })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <HomeContent />
                <FooterPage />
            </div>
        );
    }
}

export default home;