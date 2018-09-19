import React, { Component } from 'react';
import { Row } from "reactstrap";
import { getShopById } from '../networks/shopData';
import ProductInProfile from './ProductInProfile';

class ProfileSidebar extends Component {

    state = {
        shopData: null,
        isShopShop: false,
        images: null
    }

    componentDidMount() {
        this.setState({
            shopData: this.props.userData.shop
        })
        let shops = [];
        console.log(this.props.userData.shop);
        console.log(this.state.shopData);
        setTimeout(() => {
            for (let i = 0; i < this.props.userData.shop.length; i++) {
                getShopById(this.props.userData.shop[i])
                    .then(res => {
                        shops.push(res.data.shopFound);
                        this.setState({
                            shopData: shops,
                            isShopShop: true
                        })
                        console.log(this.state.shopData)
                    })
            }
        }, 100);
    }

    render() {

        const showShop = (this.state.isShopShop) ? this.state.shopData.reverse().map((shop, index) => {
            return <ProductInProfile shop={shop} key={index} />
        }) : '';

        return (
            <div >
                <ul className="list-group list-group-flush">
                    <li className="list-group-item font-weight-bold text-center"><h3>Cửa hàng của {this.props.userData.name.substring(this.props.userData.name.lastIndexOf(" "), this.props.userData.name.length)}</h3></li>
                    <li className="list-group-item font-weight-bold">
                        <Row className='mt-4'>
                            {showShop}
                        </Row>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ProfileSidebar;