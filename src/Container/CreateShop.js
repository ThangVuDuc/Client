import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createShop } from "../networks/shopData";
import { Container, Row, Col, InputGroup, InputGroupAddon, Input, Button, Modal, Form, ModalBody, ModalFooter } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateShop extends Component {
    state = {
        shopData: {
            title: null,
            description: null,
            owner: '5b9798e2c685d7050ecda54a'
        }
    }

    handleInputChange = (e) => {
        let data = this.state.shopData;
        data[e.target.name] = e.target.value
        this.setState({
            shopData: data
        });
        console.log(this.state.shopData)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        createShop(this.state.shopData)
            .then(res => {
                console.log(res.data.shopCreated._id);
                this.props.modalShopIsOpen();
                this.props.history.push(`/shop/${res.data.shopCreated._id}/manager`);
            })
    }

    handleCancel = () => {
        this.setState({
            shopData: {
                title: null,
                description: null,
                owner: this.state.shopData.owner
            }
        });
        this.props.modalShopIsOpen();
    }

    render() {
        return (
            <div className='banner'>
                <Modal size='lg' isOpen={this.props.createShopModal} toggle={this.props.modalShopIsOpen} >
                    <Form onSubmit={this.handleSubmit}>
                        <Container>
                            <div className='col-12 text-center mt-4' >
                                <h2>Tạo cửa hàng mới</h2>
                            </div>
                        </Container>
                        <ModalBody>
                            <Container fluid>
                                <Row>
                                    <Col sm='12' md={{ size: 10, offset: 1 }} >
                                        <InputGroup size='lg'>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color='success' disabled><i className="fas fa-home"></i></Button>
                                            </InputGroupAddon>
                                            <Input onChange={this.handleInputChange} name='title' type='text' placeholder="Nhập tên cửa hàng" required />
                                        </InputGroup>
                                        <br />
                                    </Col>
                                    <Col sm='12' md={{ size: 10, offset: 1 }} >
                                        <InputGroup >

                                            <InputGroupAddon addonType="prepend">
                                                <Button size='lg' color='info' disabled><i className="fas fa-pencil-alt"></i></Button>
                                            </InputGroupAddon>
                                            <Input onChange={this.handleInputChange} name='description' placeholder="Giới thiệu một chút về cửa hàng của bạn" type='textarea' />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Button type='submit' size='lg' color="success">Tạo cửa hàng <i className="fas fa-angle-double-right"></i></Button>{' '}
                            <Button onClick={this.handleCancel} size='lg' color="danger">Hủy</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default withRouter(CreateShop);