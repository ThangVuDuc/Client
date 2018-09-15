import React, { Component } from 'react';
import { Col, Row, Form, ButtonGroup, InputGroup, InputGroupAddon, ModalFooter, Input } from "reactstrap";
import { Button, Badge } from "mdbreact";
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateInfoInShopManager from './UpdateInfoInShopManager';


class InfoInShopManager extends Component {

    state = {
        isUpdate: false
    }


    changeIsUpdate = () => {
        console.log(this.props.shopData.title);
        this.setState({
            isUpdate: !this.state.isUpdate
        })
    }

    render() {

        const shopStatut = (this.props.openOrClose) ? <Badge color='success' >Mở cửa</Badge> : <Badge color='danger' >Đóng cửa</Badge>;

        const isUpdateInfo = (!this.state.isUpdate) ?
            <Row>
                <Col sm='12'>
                    <span><em>Cửa hàng của bạn:</em></span>
                </Col>
                <Col sm='12' lg='9' >

                    <h1 className='text-info display-3'>{this.props.shopData.title}</h1>
                    <h5 className='ml-3' >{this.props.shopData.description}</h5>
                    <p className='ml-5' >Trạng thái: {shopStatut}</p>
                </Col>
                <Col sm='12' lg='3' className='text-right' >
                    <Button size='sm' color='secondary' onClick={this.changeIsUpdate} outline >Thay đổi thông tin cửa hàng</Button>
                </Col>
                <Col>

                </Col>
            </Row> : <UpdateInfoInShopManager shopData={this.props.shopData} changeIsUpdate={this.changeIsUpdate} />;

        return (
            <div>
                {isUpdateInfo}
            </div>
        );
    }
}

export default InfoInShopManager;