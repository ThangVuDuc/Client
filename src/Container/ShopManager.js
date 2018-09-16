import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getShopById } from "../networks/shopData";
import ProductInShopManager from '../components/ProductInShopManager';
import InfoInShopManager from '../components/InfoInShopManager';


class ShopManager extends Component {
    state = {
        shopDataOng: null
    }

    componentDidMount() {
        this.setState({
            shopDataOng: null
        })
        console.log(this.props.match.params.id)
        getShopById(this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    shopDataOng: res.data.shopFound
                })
            })
    }

    UpdateInfo = (updateData) => {

        // this.setState({
        //     shopData: updateData
        // })
        console.log(updateData);
        
    }

    render() {

        const showInfoShop = (this.state.shopDataOng) ? <InfoInShopManager shopDataBo={this.state.shopDataOng} UpdateInfo={this.UpdateInfo} /> : '';

        return (
            <div className='banner'>
                <Container>
                    <div className='shadow p-3 mb-5 bg-white rounded img-thumbnail' >
                        {showInfoShop}
                        <hr />
                        <ProductInShopManager productList={(this.state.shopDataOng) ? this.state.shopDataOng.productList : null} />
                    </div>
                </Container>
            </div>
        );
    }
}

export default ShopManager;