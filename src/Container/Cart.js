import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <div>
                <div className="container cartContent">
                    <div className="row ">
                        <div className="col-md-8 foodPay">
                            <div className="oneFoodInCart">
                                <div className="oneFood food1 mb-3">
                                    <div className="foodImg">
                                        <img src="./images/8.jpg"/>
                                    </div>
                                    <div className="foodName">Lục trà dưa hấu kem cheese</div>
                                    <div className="minusFood">
                                        <i className="fas fa-minus-square" name={1} />
                                    </div>
                                    <div className="quantity">0</div>
                                    <div className="addFood">
                                        <i className="fas fa-plus-square" name={1} />
                                    </div>
                                    <div className="foodPrice">20,000 đ</div>
                                </div>
                                <div className=" removeFood btn btn-danger">x Remove</div>
                                <div className="note">
                                    <input type="text" placeholder="ghi chú" />
                                </div>
                                <hr />
                            </div>
                            <div className="oneFoodInCart">
                                <div className="oneFood food2 mb-3">
                                    <div className="foodImg">
                                        <img src="./images/8.jpg" />
                                    </div>
                                    <div className="foodName">Lục trà dưa hấu kem cheese</div>
                                    <div className="minusFood">
                                        <i className="fas fa-minus-square" name={2} />
                                    </div>
                                    <div className="quantity">0</div>
                                    <div className="addFood">
                                        <i className="fas fa-plus-square" name={2} />
                                    </div>
                                    <div className="foodPrice">20,000 đ</div>
                                </div>
                                <div className=" removeFood btn btn-danger">x Remove</div>
                                <div className="note">
                                    <input type="text" placeholder="ghi chú" />
                                </div>
                                <hr />
                            </div>
                            <div className="oneFoodInCart">
                                <div className="oneFood food3 mb-3">
                                    <div className="foodImg">
                                        <img src="./images/8.jpg" />
                                    </div>
                                    <div className="foodName">Lục trà dưa hấu kem cheese</div>
                                    <div className="minusFood">
                                        <i className="fas fa-minus-square" name={3} />
                                    </div>
                                    <div className="quantity">0</div>
                                    <div className="addFood">
                                        <i className="fas fa-plus-square" name={3} />
                                    </div>
                                    <div className="foodPrice">20,000 đ</div>
                                </div>
                                <div className=" removeFood btn btn-danger">x Remove</div>
                                <div className="note">
                                    <input type="text" placeholder="ghi chú" />
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-md-4 payment">
                            <div className="card text-left|center|right ">
                                <img className="card-img-top" src="holder.js/100px180/" />
                                <div className="card-body">
                                    <h4 className="card-title">Thông tin đơn hàng</h4>
                                    <p className="card-text">Tạm tính</p>
                                    <div className="totalPrice">000 đ</div>
                                    <form>
                                        <label>Nhập địa chỉ:</label>
                                        <input className="inputAddress" type="text" placeholder="Địa chỉ" />
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