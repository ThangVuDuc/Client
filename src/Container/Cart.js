import React, { Component } from 'react';
import { updateInfoShopByID } from "../networks/shopData"
import { createSession, getSession, upDateSession } from "../networks/session"
import { getProductById } from "../networks/productData"
import { createOrder } from "../networks/orderData"
import { updateUserById } from "../networks/userData"
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderList: [],
            user: null,
            total: 0,
            isUpdate: false,
            displaySuccess:'invisible d-none',
            displayFail:'invisible d-none'
        }
    }
    componentDidUpdate() {
        if (this.state.user != this.props.user)
            this.setState({ user: this.props.user })
            console.log(this.state.user)
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
    handleRemovePro = (e) => {
        var tempOrderList = this.state.orderList
        var onePro = tempOrderList.filter(x => x.id == e.target.name)
        var index = tempOrderList.findIndex(x => x.id == e.target.name)
        if (index > -1) {
            tempOrderList.splice(index, 1)
        }
        this.setState({ orderList: tempOrderList })
        upDateSession({ orderList: this.state.orderList })
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
    handleOrderPro = (e) => {
        
        e.preventDefault()
        //CHECK XEM CO SAN PHAM KHONG
        if(this.state.orderList.length>0){
            var address = document.getElementsByClassName("inputAddress")[0].value
        var phone = document.getElementsByClassName("inputPhone")[0].value
        upDateSession({ address: address, phoneNumber: phone })
            .then(data => {
                console.log(data.data.session)
                var sessionTemp = data.data.session
                //luu vao order tiep
                createOrder({ owner: this.state.user._id, address: sessionTemp.order.address, phoneNumber: sessionTemp.order.phoneNumber, orderList: sessionTemp.order.orderList })
                    .then(data => {
                        console.log(data)
                        //luu vao user.order
                        updateUserById(this.state.user._id, { order: data.data.orderCreated._id })
                            .then(data => {
                                console.log(data.data)
                                //luu xong  thi updateSession xoa { owner, address, phoneNumber, orderList, note }
                                upDateSession({ address: "", phoneNumber: "", orderList: [], note: "" })
                                    .then(data => {
                                        console.log(data);
                                        this.setState({ orderList: [] ,displaySuccess:'visible d-block'})
                                    })
                                    .catch(err => console.log(err))
                            })

                        

                    })

                //luu vao shop.order

            })
            .catch(err => console.log(err))
        }
        else{
            this.setState({displayFail:'visible d-block'})
        }
    }
    handleNoteChange = (e) => {
        //tim trong session thang nao co id =name thi them value vao note
        var tempOrderList = this.state.orderList
        var onePro = tempOrderList.filter(x => x.id == e.target.name)
        var index = tempOrderList.findIndex(x => x.id == e.target.name)
        if (index > -1) {
            tempOrderList[index].note = e.target.value
            this.setState({ orderList: tempOrderList })
            upDateSession({ orderList: this.state.orderList })
                .then(data => console.log(data))
                .catch(err => console.log(err))
        }

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
                                orderListTemp[index] = {
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
                                this.setState({ total: this.getOrderTemp().totalTemp, orderList: data.data.order.orderList })
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
                    <input className=" removeFood btn btn-danger" name={order.id} onClick={this.handleRemovePro} defaultValue="X Remove" />
                    <div className="note">
                        <input type="text" name={order.id} onChange={this.handleNoteChange} placeholder="ghi chú" defaultValue={order.note ? order.note : ""} />
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
                    <div className={"alert OrderSuccess alert-success "+this.state.displaySuccess}>
                        <strong>Success!</strong> Đặt hàng thành công, mặt hàng sẽ được ship sớm tới bạn. Cảm ơn bạn đã dùng app !!!
                     </div>
                    <div className={"alert OrderFail alert-warning "+this.state.displayFail}>
                        <strong>Warning!</strong> Vui lòng chọn sản phẩm để đặt hàng !!!
                     </div>
                    <div className="row ">
                        <div className="col-md-8 foodPay">
                            {this.getOrderTemp().result}
                        </div>
                        <div className="col-md-4 payment">
                            <div className="card text-left|center|right ">
                                <div className="card-body">
                                    <h4 className="card-title">Thông tin đơn hàng</h4>
                                    <p className="card-text">Tạm tính</p>
                                    <div className="totalPrice">
                                        {this.getOrderTemp().totalTemp.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} Đ
                                    </div>
                                    <form onSubmit={this.handleOrderPro}>
                                        <div className="row" style={{ marginTop: 20, marginRight: 0, marginLeft: 0, width: "100%" }}>
                                            <label className="col-4">Nhập địa chỉ:</label>
                                            <input required className="inputAddress col-8" type="text" placeholder="Địa chỉ" />
                                        </div>
                                        <div className="row" style={{ marginTop: 20, marginRight: 0, marginLeft: 0, width: "100%" }}>
                                            <label className="col-4" >Số điện thoại:</label>
                                            <input required className="inputPhone col-8" type="number" placeholder="SĐT" />
                                        </div>
                                        <input style={{ marginTop: 20, width: "100%" }} className="btn btn-warning" type="submit" value="Đặt Hàng" />
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