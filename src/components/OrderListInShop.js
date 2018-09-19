import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Container, ModalFooter, Button, Row, Col } from "reactstrap";
import { getProductById } from "../networks/productData";
import { getUserById } from "../networks/userData";
import ProductOrderListInShop from './ProductOrderListInShop';

class OrderListInShop extends Component {
    state = {
        listModal: false,
        orderData: null,
    }

    componentDidMount() {
        let data = this.props.orderData;
        for (let i = 0; i < data.length; i++) {
            getUserById(data[i].owner)
                .then(userRes => {
                    data[i].owner = {
                        name: userRes.data.user.name,
                        _id: userRes.data.user._id,
                        avatarUrl: userRes.data.user.avatarUrl,
                    }
                })
            for (let j = 0; j < data[i].orderList.length; j++) {
                getProductById(data[i].orderList[j].product)
                    .then(res => {
                        data[i].orderList[j].product = res.data.productFound;
                        this.setState({
                            orderData: data
                        })
                    });
            }
        }
    };

    isListModal = () => {
        this.setState({
            listModal: !this.state.listModal
        })
    }

    render() {

        const listOrderUser = (this.state.orderData) ?
            this.state.orderData.map((order, index) => {
                return <div key={index}>
                    <Row  >
                        <Col sm='2'>
                            <img className='img-fluid rounded-circle' src={order.owner.avatarUrl} />
                        </Col>
                        <Col sm='10'>
                            <h3>{order.owner.name}</h3>
                            <p>Địa chỉ: <strong>{order.address}</strong></p>
                            <p>Số điện thoại: <strong>{order.phoneNumber}</strong></p>
                            <p>{index}</p>
                            <ProductOrderListInShop productList={order.orderList} />
                        </Col>
                    </Row>
                    <hr />
                </div>
            }) : '';

        return (
            <div>
                <i onClick={this.isListModal} className="fas fa-shopping-cart" />
                <Modal size='lg' isOpen={this.state.listModal} toggle={this.isListModal}>
                    <ModalHeader toggle={this.isListModal}>Danh sách order</ModalHeader>
                    <ModalBody>
                        <Container fluid >
                            {listOrderUser}
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.isListModal}>Đóng</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default OrderListInShop;