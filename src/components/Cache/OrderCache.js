import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'reactstrap';
import { getOrderById } from "../../networks/orderData";
import { getShopById } from "../../networks/shopData";

class OrderCache extends Component {
    state = {
        orderCache: undefined,
        totalPrice: undefined
    }

    componentDidMount() {
        let tPrice = 0;
        getOrderById("5b979b603fc55a0644cf36ef")
            .then(res => {
                let orderData = res.data.orderFound;
                this.props.setOrderLength(orderData.orderList.length);
                for (let i = 0; i < orderData.orderList.length; i++) {
                    const shopID = orderData.orderList[i].product.shopID;
                    tPrice += (orderData.orderList[i].amount * orderData.orderList[i].product.price);
                    getShopById(shopID)
                        .then(shopData => {
                            orderData.orderList[i].product.shopID = shopData.data.shopFound;
                        })
                }
                this.setState({
                    orderCache: orderData,
                    totalPrice: tPrice
                })
            })
            .catch(err => console.error(err));
    }

    ChangeTotal = () => {

    }

    ChangeAmount = (e) => {
        if (e.target.value > 0) {
            let key = e.target.name.substring(e.target.name.length - 1, e.target.name.length);
            let data = this.state.orderCache;
            data.orderList[key].amount = e.target.value;
            this.setState({
                orderCache: data
            })
        }
    }

    render() {
        const listOrder = (this.state.orderCache && this.state.orderCache.orderList[0].product.shopID.title) ?
            this.state.orderCache.orderList.map((order, index) => (
                <div key={index} className='orderListRowInCache'>
                    <Row>
                        <Col xs='2'>
                            <img src={order.product.image} className='orderListInCache img-thumbnail' />
                        </Col>
                        <Col xs='6'>
                            <h5 className='orderListTitleInCache' >{order.product.name}</h5>
                            <span>Cung cấp bởi <a className='orderListTitleInCache' href='#'>{this.state.orderCache.orderList[0].product.shopID.title}</a></span>

                        </Col>
                        <Col xs='2'>
                            Số lượng: <Input type="number" onChange={this.ChangeAmount} name={'abc' + index} value={(Number)(order.amount)} />
                        </Col>
                        <Col xs='2'>
                            <div className='text-right'>
                                <h5>{(order.product.price * order.amount).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}đ</h5>
                                <Button type='button' outline color='danger' size='sm'>Xóa</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            )) : "Bạn chưa có sản phẩm nào trong giỏ";

        const totalOrder = (this.state.totalPrice) ?
            <div className='text-right'>
                <hr />
                <Row>
                    <Col xs='12'>
                        <h5>Thành tiền: <span className='orderListTitleInCache'>{this.state.totalPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}đ</span></h5>
                    </Col>
                </Row>
            </div> : '';


        return (
            <div>
                <Modal size='lg' isOpen={this.props.orderModal} toggle={() => this.props.toggle()}>
                    <ModalHeader toggle={() => this.props.toggle()}>Đơn hàng của bạn</ModalHeader>
                    <ModalBody>
                        <Container fluid >
                            {listOrder}
                            {totalOrder}
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Thanh toán</Button>
                        <Button color="danger" onClick={() => this.props.toggle()}>Đóng</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default OrderCache;