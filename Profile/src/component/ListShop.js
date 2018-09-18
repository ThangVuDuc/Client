import React, { Component } from 'react';
import {
    Container, Row, Button, CardImg, Card, CardText, CardBody, CardTitle, Col} from "reactstrap"

class ListShop extends Component {
    render() {
        return (
            <div className='list-shop'>
                <Container>
                    <h1>Danh sách cửa hàng</h1>
                    <Row>
                        <Card>
                            <Row>
                            <Col sm={3}>
                                <CardImg top width="100%" src="https://images.foody.vn/res/g1/4192/prof/s576x330/foody-mobile-quan-an-hoang-dung.jpg" alt="Card image cap" />
                            </Col>
                            <Col sm={9}>
                                <CardBody>
                                    <CardTitle>Bun bo hue </CardTitle>
                                    <CardText>Bun sieu ngon</CardText>
                                </CardBody>
                            </Col>
                            </Row>
                        </Card>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default ListShop;