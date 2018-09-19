import React, { Component } from 'react';
import { Button, Row, Col, Input, InputGroup, InputGroupAddon } from "reactstrap";
import Base64 from 'react-file-base64';
import { uploadFile } from "../networks/imgurData";
import imgDemo from "../img/imageDemo.jpg";
import load from "../img/loading.png";
import { getProductById, updateProductById } from '../networks/productData';


class UpdateProductInShopManager extends Component {

    state = {
        isUpdate: false,
        files: null,
        productData: null,
        isLoading : false
    }

    componentDidMount = () => {
        getProductById(this.props.oldProduct._id)
            .then(res => {
                this.setState({
                    productData: res.data.productFound
                })
            })
    }

    _getFile = (file) => {
        this._changeIsLoading();
        let data = this.state.productData;
        data.image = load;
        file.base64 = file.base64.substring(file.base64.indexOf(',') + 1, file.base64.length)
        this.setState({
            files: file
        })
        uploadFile(file)
            .then(res => {
                data.image = res.data.link;
                this.setState({
                    productData: data
                });
                this._changeIsLoading();
            })
    }

    _handleNameChange = (e) => {
        let productData = this.state.productData;
        productData[e.target.name] = e.target.value;
        this.setState({
            productData: productData
        })
    }

    _handlePriceChange = (e) => {
        if (e.target.value >= 0) {
            let productData = this.state.productData;
            productData[e.target.name] = e.target.value;
            this.setState({
                productData: productData
            })
        }
    }

    _changeIsLoading = () => {
        this.setState({
            isLoading: !this.state.isLoading
        });
        console.log('aaaaa')
    }

    _handleisUpdate = () => {
        this.setState({
            isUpdate: !this.state.isUpdate
        });
    }

    _handleCancelButton = () => {
        this.setState({
            productData: this.props.oldProduct
        })
        this.componentDidMount();
        this._handleisUpdate();
    }

    _handleSubmitButton = () => {
        this._changeIsLoading();
        updateProductById(this.state.productData._id, this.state.productData)
            .then(res => {
                let temp = this.props.oldProduct;
                temp.name = this.state.productData.name;
                temp.price = this.state.productData.price;
                temp.image = this.state.productData.image;
                this._changeIsLoading();
                this._handleisUpdate();
            })
        
    }

    render() {

        let showAddNew;

        if (this.state.productData && this.state.isUpdate) {
            showAddNew = <Row className='img-thumbnail ml-2 mr-2'>
                <Col sm='3' className='mt-2 mb-2'>
                    <img className='fixed img-thumbnail' src={(this.state.productData.image) ? this.state.productData.image : imgDemo} />
                </Col>
                <Col sm='9' className='mt-2'>
                    <Row>
                        <Col sm='12' className='mt-1'>
                            <InputGroup >
                                <InputGroupAddon size='lg' addonType="prepend">
                                    <Button color='success' disabled><i className="fas fa-utensils"></i></Button>
                                </InputGroupAddon>
                                <Input name='name' placeholder="Tên sản phẩm" type='text' value={this.state.productData.name} onChange={this._handleNameChange} />
                            </InputGroup>
                        </Col>
                        <Col sm='4' className='mt-3' >
                            <InputGroup >
                                <InputGroupAddon addonType="prepend">
                                    <Button color='danger' disabled>VNĐ</Button>
                                </InputGroupAddon>
                                <Input name='price' placeholder="Giá tiền" type='number' value={this.state.productData.price} onChange={this._handlePriceChange} />
                            </InputGroup>
                        </Col>
                        <Col sm='8' className='mt-4' >
                            <Base64 className='btn btn-success' multiple={false} onDone={this._getFile.bind(this)} />
                        </Col>
                        <Col sm='10' className='mt-3 text-center'>
                            <Button onClick={this._handleSubmitButton} color='primary' disabled={this.state.isLoading} >Xác nhận</Button>
                            <Button onClick={this._handleCancelButton} color='danger' disabled={this.state.isLoading} className='ml-3' >Hủy</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        } else if (this.state.productData && !this.state.isUpdate) {
            showAddNew = <Row className='mt-4' >
            <Col lg='2' sm='3' >
                <img src={this.state.productData.image} className='img-fluid img-thumbnail' />
            </Col>
            <Col lg='10' sm='9' >
                <h3><strong>{this.state.productData.name}</strong></h3>
                <h6>Đơn giá: <span className='text-danger' >{this.state.productData.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</span><span className='text-primary' >.vnđ</span> / 1 sản phẩm</h6>
                <Button size='sm' outline color='warning' onClick={this._handleisUpdate} >Thay đổi thông tin sản phẩm</Button>
            </Col>
        </Row>
        } else {
            showAddNew = '';
        }

        return (
            <div>
                {showAddNew}

            </div>
        );
    }
}

export default UpdateProductInShopManager;