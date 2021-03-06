import React, { Component } from 'react';
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getShopById } from "../networks/shopData";
import ProductInShopManager from '../components/ProductInShopManager';
import InfoInShopManager from '../components/InfoInShopManager';


class ShopManager extends Component {
    state = {
        shopDataOng: null
    }

    componentDidMount() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
        this.setState({
            shopDataOng: null
        })
        getShopById(this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    shopDataOng: res.data.shopFound
                })
            })
    }

    _checkFbData = () => {
        console.log()
    }

    UpdateInfo = (updateData) => {

        this.setState({
            shopData: updateData
        })
        console.log(updateData);
        
    }

    render() {

        const showInfoShop = (this.state.shopDataOng) ? <InfoInShopManager shopDataBo={this.state.shopDataOng} UpdateInfo={this._handleUpdateData} /> : '';

        

        return (
            <div style={{marginTop: 100}}>
                <Container>
                    <div className='shadow p-3 mb-5 bg-white rounded img-thumbnail' >
                        {showInfoShop}
                        <hr />
                        <ProductInShopManager shopData={this.state.shopDataOng} UpdateInfo={this.UpdateInfo} />
                    </div>
                </Container>
            </div>
        );
    }
}

export default ShopManager;