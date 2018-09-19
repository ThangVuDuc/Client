import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import AddNewProductInShopManager from './AddNewProductInShopManager';
import UpdateProductInShopManager from './UpdateProductInShopManager';

class ProductInShopManager extends Component {
    render() {


        const productLengthInShop = (this.props.shopData) ? ('Bạn có ' + this.props.shopData.productList.length + ' sản phẩm trong cửa hàng') : '';


        const addNewProductInShop = (this.props.shopData) ? <AddNewProductInShopManager shopData={this.props.shopData} UpdateInfo={this.props.UpdateInfo} /> : '';

        const listProductInShop = (this.props.shopData && this.props.shopData.productList) ?
            this.props.shopData.productList.map((product, index) => {
                return <UpdateProductInShopManager oldProduct={product} key={index} />
            }) : () => {
                return <Row>
                    <Col sm='12' className='text-center' >
                        Bạn chưa có sản phẩm nào
                    </Col>
                </Row>
            }

        return (
            <div>
                <Row>
                    <Col sm='12'>
                    <span><em>{productLengthInShop}</em></span>
                    </Col>
                    <Col sm='12'>
                        {listProductInShop}
                    </Col>

                    <Col sm='12' className='text-center mt-4'>
                        {addNewProductInShop}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductInShopManager;