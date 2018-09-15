import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getShopById } from "../../networks/shopData";
import ProductInShopManager from '../ProductInShopManager';
import InfoInShopManager from '../InfoInShopManager';


class ShopManager extends Component {
    state = {
        shopDataOng: null,
        file: null
    }

    componentDidMount() {
        let id = '5b968b5be4150252f00b4986';
        getShopById(id)
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