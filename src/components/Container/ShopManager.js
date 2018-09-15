import React, { Component } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Badge } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getShopById } from "../../networks/shopData";
import { uploadFile } from "../../networks/imgurData";
import Base64 from 'react-file-base64';
import ProductInShopManager from './ProductInShopManager';


class ShopManager extends Component {
    state = {
        shopData: null,
        file: null
    }

    componentDidMount() {
        let id = '5b968b5be4150252f00b4986';
        getShopById(id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    shopData: res.data.shopFound
                })
            })
    }

    getFiles = (file) => {
        // this.setState({
        //     file: {
        //         image: file.base64,
        //         title: ,
        //         name :
        //         type
        //     }
        // });
        // console.log(this.state.file);
        // uploadFile(this.state.file)

        // uploadFile(this.state.file)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     })
    }


    render() {

        const shopStatut = (this.props.openOrClose) ? <Badge color='success' >Mở cửa</Badge> : <Badge color='danger' >Đóng cửa</Badge>;


        const showInfoShop = (this.state.shopData) ?
            <Row>
                <Col sm='12'>
                    <span><em>Cửa hàng của bạn:</em></span>
                </Col>
                <Col sm='12' lg='9' >

                    <h1 className='text-info display-3'>{this.state.shopData.title}</h1>
                    <h5 className='ml-3' >{this.state.shopData.description}</h5>
                    <p className='ml-5' >Trạng thái: {shopStatut}</p>
                </Col>
                <Col sm='12' lg='3' className='text-right' >
                    <Button size='sm' outline >Thay đổi thông tin cửa hàng</Button>
                </Col>
                <Col>

                </Col>
            </Row> : ''




        return (
            <div className='banner'>
                <Container>
                    <div className='shadow p-3 mb-5 bg-white rounded img-thumbnail' >
                        {showInfoShop}
                        <hr />
                        <ProductInShopManager productList={(this.state.shopData) ? this.state.shopData.productList : null} />
                    </div>
                </Container>
            </div>
        );
    }
}

export default ShopManager;