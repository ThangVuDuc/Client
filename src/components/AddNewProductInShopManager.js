import React, { Component } from 'react';
import { Button, Row, Col, Input, InputGroup, InputGroupAddon } from "reactstrap";
import Base64 from 'react-file-base64';
import { uploadFile } from "../networks/imgurData";
import 'bootstrap/dist/css/bootstrap.min.css'
import imgDemo from "../img/imageDemo.jpg";
import { updateInfoShopByID } from "../networks/shopData";
import { createProduct } from "../networks/productData";

class AddNewProductInShopManager extends Component {

    state = {
        isAddNew: false,
        shopData: null,
        files: null,
        newProductData: null
    }

    componentDidMount = () => {
        this.setState({
            shopData: this.props.shopData,
            newProductData: {
                shopID: this.props.shopData._id,
                name: '',
                image: null,
                price: ''
            }
        })
    }

    _getFile = (file) => {
        console.log(file)
        file.base64 = file.base64.substring(file.base64.indexOf(',') + 1, file.base64.length)
        this.setState({
            files: file
        })
        uploadFile(file)
            .then(res => {
                console.log(res)
                let productData = this.state.newProductData;
                productData.image = res.data.link;
                this.setState({
                    newProductData: productData
                })
            })
    }

    _handleNameChange = (e) => {
        let productData = this.state.newProductData;
        productData[e.target.name] = e.target.value;
        this.setState({
            newProductData: productData
        })
        console.log(this.state.shopData)
    }

    _handleIsAddNew = () => {
        this.setState({
            isAddNew: !this.state.isAddNew
        });
        this.componentDidMount();
    }

    _handlePriceChange = (e) => {
        if (e.target.value >= 0) {
            let productData = this.state.newProductData;
            productData[e.target.name] = e.target.value;
            this.setState({
                newProductData: productData
            })
        }
    }

    _handleSubmitButton = () => {
        createProduct(this.state.newProductData)
            .then(res => {
                let data = this.state.shopData;
                data.productList.push(res.data.productCreated._id);
                this.setState({
                    shopData: data
                })
                updateInfoShopByID(this.state.shopData._id, { productList: this.state.shopData.productList })
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(err => console.error(err))


    }

    render() {

        const showAddNew = (this.state.isAddNew) ? <Row className='img-thumbnail ml-2 mr-2'>
            <Col sm='3' className='mt-2 mb-2'>
                <img className='fixed img-thumbnail' src={(this.state.newProductData.image) ? this.state.newProductData.image : imgDemo} />
            </Col>
            <Col sm='9' className='mt-2'>
                <Row>
                    <Col sm='12' className='mt-1'>
                        <InputGroup >
                            <InputGroupAddon size='lg' addonType="prepend">
                                <Button color='success' disabled><i className="fas fa-utensils"></i></Button>
                            </InputGroupAddon>
                            <Input name='name' placeholder="Tên sản phẩm" type='text' value={this.state.newProductData.name} onChange={this._handleNameChange} />
                        </InputGroup>
                    </Col>
                    <Col sm='4' className='mt-3' >
                        <InputGroup >
                            <InputGroupAddon addonType="prepend">
                                <Button color='danger' disabled>VNĐ</Button>
                            </InputGroupAddon>
                            <Input name='price' placeholder="Giá tiền" type='number' value={this.state.newProductData.price} onChange={this._handlePriceChange} />
                        </InputGroup>
                    </Col>
                    <Col sm='8' className='mt-4' >
                        <Base64 className='btn btn-success' multiple={false} onDone={this._getFile.bind(this)} />
                    </Col>
                    <Col sm='10' className='mt-3 text-center'>
                        <Button onClick={this._handleSubmitButton} color='primary' >Xác nhận</Button>
                        <Button onClick={this._handleIsAddNew} color='danger' className='ml-3' >Hủy</Button>
                    </Col>
                </Row>
            </Col>
        </Row> : <Button onClick={this._handleIsAddNew} outline color='danger' size='lg' >Thêm sản phẩm mới</Button>;

        return (
            <div>
                {showAddNew}

            </div>
        );
    }
}

export default AddNewProductInShopManager;