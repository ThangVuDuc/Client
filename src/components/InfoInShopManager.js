import React, { Component } from 'react';
import { Col, Row } from "reactstrap";
import { Button, Badge } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateInfoInShopManager from './UpdateInfoInShopManager';
import OrderListInShop from './OrderListInShop';


class InfoInShopManager extends Component {

    state = {
        isUpdate: false
    }


    changeIsUpdate = () => {
        console.log(this.props.shopDataBo);
        this.setState({
            isUpdate: !this.state.isUpdate
        })
    }

    render() {

        const shopStatut = (this.props.shopDataBo.openOrClose) ? <Badge color='success' >Mở cửa</Badge> : <Badge color='danger' >Đóng cửa</Badge>;

        const isUpdateInfo = (!this.state.isUpdate && this.props.shopDataBo) ?

            <Row>
                <Col sm='12'>
                    <span><em>Cửa hàng của bạn:</em></span>
                </Col>
                <Col sm='12' lg='9' >

                    <h1 className='text-info display-3'>{this.props.shopDataBo.title}</h1>
                    <h5 className='ml-3' >{this.props.shopDataBo.description}</h5>
                    <p className='ml-5' >Trạng thái: {shopStatut}</p>
                </Col>
                <Col sm='12' lg='3' className='text-right' >
                    <Button size='sm' color='secondary' onClick={this.changeIsUpdate} outline >Thay đổi thông tin cửa hàng</Button>
                    <div className="cart mt-3 text-center">
                        <OrderListInShop orderData={this.props.shopDataBo.listOrder} />
                        <h6 className="mt-2">Danh Sách Ordered</h6>
                    </div>
                </Col>
                <Col>

                </Col>
            </Row> : <UpdateInfoInShopManager changeIsUpdate={this.changeIsUpdate} shopID={this.props.shopDataBo._id} />;

        return (
            <div>
                {isUpdateInfo}
            </div>
        );
    }
}

export default InfoInShopManager;