import React, { Component } from 'react';
import { updateInfoShopByID } from "../networks/shopData"
import { createSession, getSession } from "../networks/session"
import { getProductById } from "../networks/productData"
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            user: null,
            total: 0,
            isUpdate: false
        }
    }
    componentDidUpdate() {
        if (this.state.user != this.props.user)
            this.setState({ user: this.props.user })
        // if (this.state.isUpdate) {
        //     getSession()
        //         .then(data => {
        //             this.setState({ orderList: data.data.session.order.orderList })
        //         })
        //         .catch(err => console.log(err))
        // }
    }
    componentDidMount() {
        this.setState({ user: this.props.user })
        getSession()
            .then(data => {
                this.setState({ orderList: data.data.session.order.orderList })
            })
            .catch(err => console.log(err))
    }
    pushProductSession = (e) => {
        var name = e.target.name;
        var amount = e.target.value;
        console.log(name)
        console.log(amount)
        //lay session ve truoc de kiem tra orderList
        getSession()
            .then(data => {
                // console.log(data.data.session)
                var orderListTemp = data.data.session.order ? data.data.session.order.orderList : []
                // console.log(orderListTemp)
                getProductById(name)//lay san pham duoc chon
                    .then(data => {

                        var duplicatePro = orderListTemp.filter(x => x.id == data.data.productFound._id)
                        if (duplicatePro[0]) {
                            var index = orderListTemp.findIndex(x => x.id == data.data.productFound._id)
                            if (index > -1) {
                                orderListTemp[index]={
                                    id: data.data.productFound._id,
                                    shopID: {
                                        _id: data.data.productFound.shopID._id
                                    },
                                    name: data.data.productFound.name,
                                    image: data.data.productFound.image,
                                    price: data.data.productFound.price,
                                    amount: amount
                                }
                            }
                        }
                        createSession({ owner: this.state.user._id, orderList: orderListTemp })
                            .then(data => {
                                console.log(data.data)
                                // this.setState({ isUpdate: true })
                                this.setState({ total: this.getOrderTemp().totalTemp,orderList:data.data.order.orderList })
                                // this.setState({ isUpdate: false })
                            })
                            .catch(err => console.log(err))
                    })
            })
            .catch(err => console.log(err))
    }
    getOrderTemp = () => {
        var totalTemp = 0;
        var result = this.state.orderList.map((order, index) => {
            totalTemp += order.price * order.amount
            return (
                <div key={index} className="oneFoodInCart">
                    <div className="oneFood food1 mb-3">
                        <div className="foodImg">
                            <img src={order.image} />
                        </div>
                        <div className="foodName">{order.name}</div>
                        <input type="number" name={order.id} onChange={this.pushProductSession} defaultValue={order.amount} min={0} max={100} className="slsp" />
                        <div className="foodPrice">{order.price}</div>
                    </div>
                    <div className=" removeFood btn btn-danger">x Remove</div>
                    <div className="note">
                        <input type="text" placeholder="ghi chú" />
                    </div>
                    <hr />
                </div>
            )
        })
        return { result, totalTemp }
    }
    render() {
        return (
            <div>
                <div className="container cartContent">
                    <div className="row ">
                        <div className="col-md-8 foodPay">
                            {this.getOrderTemp().result}
                        </div>
                        <div className="col-md-4 payment">
                            <div className="card text-left|center|right ">
                                <div className="card-body">
                                    <h4 className="card-title">Thông tin đơn hàng</h4>
                                    <p className="card-text">Tạm tính</p>
                                    <div className="totalPrice">{this.getOrderTemp().totalTemp} Đ</div>
                                    <form>
                                        <label>Nhập địa chỉ:</label>
                                        <input className="inputAddress" type="text" placeholder="Địa chỉ" />
                                        <label>Số điện thoại:</label>
                                        <input className="inputAddress" type="number" placeholder="SĐT" />
                                        <button className="btn btn-warning">Đặt Hàng</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;