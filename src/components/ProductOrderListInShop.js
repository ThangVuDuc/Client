import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

class ProductOrderListInShop extends Component {



    render() {

        const producList = this.props.productList.map((order, index) => {
            console.log(this.props.shopID)
            console.log(order.product.shopID._id)
            if (this.props.shopID === order.product.shopID._id) {
                return <Row key={'hu' + index}>
                    <Col sm='3'>
                        <img className=' rounded img-fluid' src={order.product.image} />
                    </Col>
                    <Col sm='9'>
                        <h4>{order.product.name}</h4>
                        <p>Số lượng: <strong>{order.amount}</strong></p>
                        <p>Ghi chú: <strong>{order.note}</strong></p>
                    </Col>
                </Row>
            }
        })

        return (
            <div>
                {producList}
            </div>
        );
    }
}

export default ProductOrderListInShop;