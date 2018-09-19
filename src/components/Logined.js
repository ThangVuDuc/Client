import React, { Component } from 'react';
import { ButtonGroup, Button, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import OrderCache from './Cache/OrderCache';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import { createSession, getSession } from "../networks/session"
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
        getSession()
            .then(data => {
                this.setState({ orderList: data.data.session.order.orderList })
            })
            .catch(err => console.log(err))
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



    render() {
        let orderCount = (this.state.orderData.orderLength) ? (this.state.orderData.orderLength) : '';

        return (
            <ButtonGroup>
                {/* <Button color='danger' onClick={this.modalToggle} >{orderCount}<i className="fas fa-shopping-cart"></i></Button> */}
                <Link to={"/cart/"} >
                    <Button color='danger' >{this.state.orderList.length}<i className="fas fa-shopping-cart"></i></Button>
                </Link>
                <OrderCache orderModal={this.state.orderModalOpen} toggle={this.modalToggle} setOrderLength={this.setOrderLength} />
                <Button color='blue-grey' disabled >{(this.props.userData) ? this.props.userData.name : ''}</Button>
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
                            {/* <Link to={(this.props.userData) ? `/user/${this.props.userData._id}` : ""}> */}
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