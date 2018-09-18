import React, { Component } from 'react';
import { Button } from 'mdbreact';
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import AddNewProductInShopManager from './AddNewProductInShopManager';

class ProductInShopManager extends Component {
    render() {


        const productLengthInShop = (this.props.shopData) ? ('Bạn có ' + this.props.shopData.productList.length + ' sản phẩm trong cửa hàng') : '';


        const addNewProductInShop = (this.props.shopData) ? <AddNewProductInShopManager shopData={this.props.shopData} /> : '';

        const listProductInShop = (this.props.shopData) ?
            this.props.shopData.productList.map((product, index) => {
                return <Row key={'product' + index} className='mt-4' >
                    <Col lg='2' sm='3' >
                        <img src={product.image} className='img-fluid img-thumbnail' />
                    </Col>
                    <Col lg='10' sm='9' >
                        <h3><strong>{product.name}</strong></h3>
                        <h6>Đơn giá: <span className='text-danger' >{product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</span><span className='text-primary' >.vnđ</span> / 1 sản phẩm</h6>
                        <Button size='sm' outline color='warning' >Thay đổi thông tin sản phẩm</Button>
                    </Col>
                </Row>
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