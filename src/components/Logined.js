import React, { Component } from 'react';
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import OrderCache from './Cache/OrderCache';
import {
<<<<<<< HEAD
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { createSession, getSession } from "../networks/session"
=======
    withRouter
} from 'react-router-dom'
import {getSession } from "../networks/session"
>>>>>>> MInhDuc
class Logined extends Component {
    state = {
        dropdownUserOpen: false,
        orderModalOpen: false,
        orderData: {
            orderLength: null
        },
        facebookData: null,
        orderList:[]

    }
    componentDidMount() {
        this.setState({ user: this.props.user })
<<<<<<< HEAD
=======
        getSession()
            .then(data => {
                this.setState({ orderList: data.data.session.order.orderList })
            })
            .catch(err => console.log(err))
>>>>>>> MInhDuc
    }

    setOrderLength = (value) => {
        this.setState({
            orderData: {
                orderLength: value
            }
        })
    }

    userToggle = () => {
        this.setState({
            dropdownUserOpen: !this.state.dropdownUserOpen
        })
    }

    modalToggle = () => {
        this.setState({
            orderModalOpen: !this.state.orderModalOpen
        })
    }

    MyShopLink = (e) => {
        e.preventDefault();
        this.props.history.push(`/user/${this.props.userData._id}`);
        // console.log(this.props.userData._id)
    }

    showwww = () => {
        console.log(this.props)
    }

    _MyCartLink = (e) => {
        e.preventDefault();
        this.props.history.push(`/cart`);
        // console.log(this.props.userData._id)
    }



    render() {
<<<<<<< HEAD
        let orderCount = (this.state.orderData.orderLength) ? (this.state.orderData.orderLength) : '';

        return (
            <ButtonGroup>
                {/* <Button color='danger' onClick={this.modalToggle} >{orderCount}<i className="fas fa-shopping-cart"></i></Button> */}
                <Link to={"/cart/"} >
                    <Button color='danger' >{this.props.proNu}<i className="fas fa-shopping-cart"></i></Button>
                </Link>
=======

        return (
            <ButtonGroup>
                <Button color='danger' onClick={this._MyCartLink} >{this.state.orderList.length}<i className="fas fa-shopping-cart"></i></Button>
                {/* <Link to={"/cart/"} >
                    <Button color='danger' >{this.state.orderList.length}<i className="fas fa-shopping-cart"></i></Button>
                </Link> */}
>>>>>>> MInhDuc
                <OrderCache orderModal={this.state.orderModalOpen} toggle={this.modalToggle} setOrderLength={this.setOrderLength} />
                <Button color='secondary' disabled >{(this.props.userData) ? this.props.userData.name : ''}</Button>
                <ButtonDropdown isOpen={this.state.dropdownUserOpen} toggle={this.userToggle}>
                    <DropdownToggle color='success' caret></DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={this.props.modalShopIsOpen} >
                            <span className='text-warning' ><i className="fas fa-upload"></i> </span> Tạo cửa hàng
                        </DropdownItem>
                        <DropdownItem >
                            <span className='text-success' ><i className="fas fa-history"></i> </span> Lịch sử đặt hàng
                        </DropdownItem>
                        <DropdownItem onClick={this.MyShopLink} >
<<<<<<< HEAD
                            {/* <Link to='/checkout'> */}
=======
                            {/* <Link to={(this.props.userData) ? `/user/${this.props.userData._id}` : ""}> */}
>>>>>>> MInhDuc
                            <span><span className='text-primary textDeco ' ><i className="fas fa-user"></i></span> Cửa hàng của tôi</span>
                            {/* </Link> */}
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={this.props.fbLogout}>
                            <span><span className='text-danger' ><i className="fas fa-sign-out-alt"></i> </span> Đăng xuất</span>
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </ButtonGroup>
        );
    }
}

export default withRouter(Logined);