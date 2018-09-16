import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Form, ButtonGroup, InputGroup, InputGroupAddon, ModalFooter, Input } from "reactstrap";
import { Button, Badge } from "mdbreact";
import { getShopById } from "../networks/shopData";

class UpdateInfoInShopManager extends Component {
    state = {
        shopData: null
    }

    componentDidMount() {
        console.log(this.props)
        getShopById(this.props.shopID)
            .then(res => {
                this.setState({
                    shopData: res.data.shopFound
                })
            })
    }

    isOpenOrClose = () => {
        let data = this.state.shopData;
        data.openOrClose = !data.openOrClose;
        this.setState({
            shopData: data
        })
    }

    handleInputChange = (e) => {
        let data = this.state.shopData;
        data[e.target.name] = e.target.value;
        this.setState({
            shopData: data
        });
    }

    handleCancelButton = () => {
        this.setState({
            shopData: null
        })
        this.props.changeIsUpdate();

    }

    render() {

        const updateForm = (this.state.shopData) ? <Form>
            <Row>
                <Col sm='12' md={{ size: 10, offset: 1 }} >
                    <h2>Thay đổi thông tin</h2>
                    <InputGroup size='md'>
                        <InputGroupAddon addonType="prepend">
                            <Button color='success' disabled><i className="fas fa-home"></i></Button>
                        </InputGroupAddon>
                        <Input name='title' onChange={this.handleInputChange} type='text' value={this.state.shopData.title} required />
                    </InputGroup>
                    <br />
                    <InputGroup >

                        <InputGroupAddon addonType="prepend">
                            <Button size='sm' color='info' disabled><i className="fas fa-pencil-alt"></i></Button>
                        </InputGroupAddon>
                        <Input name='description' onChange={this.handleInputChange} type='textarea' value={this.state.shopData.description} />
                    </InputGroup>
                    <br />
                </Col>
                <Col sm='3' className='text-right'>
                    <p>Trạng thái</p>
                </Col>
                <Col sm='3' className='text-left'>
                    <ButtonGroup>
                        <Button color="danger" outline onClick={this.isOpenOrClose} active={this.state.shopData.openOrClose === false}>Đóng cửa</Button>
                        <Button color="success" outline onClick={this.isOpenOrClose} active={this.state.shopData.openOrClose === true}>Mở cửa</Button>
                    </ButtonGroup>
                </Col>
                <Col sm='6' className='text-center'>

                    <Button type='submit' color="primary">Lưu thay đổi</Button> {" "}
                    <Button color="danger" onClick={this.handleCancelButton} >Hủy</Button>
                </Col>
            </Row>
        </Form> : '';

        return (
            <div>
                {updateForm}
            </div>
        );
    }
}

export default UpdateInfoInShopManager;