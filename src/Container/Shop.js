import React, { Component } from 'react';
import Banner from '../components/Banner'
import { ROOT_API } from "../static/index";
import OrderListInShop from '../components/OrderListInShop';
import { getProductById } from "../networks/productData"
import axios from 'axios'
import Moment from 'react-moment';
import {
    Link
} from 'react-router-dom'
import { updateInfoShopByID } from "../networks/shopData"
import { createSession, getSession, upDateSession } from "../networks/session"

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: "",
            shops: [],
            user: null,
            productImg: []
        }
        this.comment = React.createRef()
        this.inputCM = React.createRef()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.getData(nextProps.match.params.id);
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    getData = (param) => {
        axios.get(ROOT_API + "/shop/" + param)
            .then((response) => {
                this.setState({ shop: response.data.shopFound })
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.put(ROOT_API + '/shop')
            .then((response) => {
                this.setState({ shops: response.data.shops })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidUpdate() {
        if (this.state.user !== this.props.user)
            this.setState({ user: this.props.user })
        document.getElementsByClassName("userInputCM")[0].value = ""
    }
    componentDidMount() {
        this.setState({ user: this.props.user })
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
        document.querySelector(".userInputCM").onfocus = function () {
            document.querySelector(".addComment").classList.add("show")
        }
        document.querySelector(".userInputCM").onblur = function () {
            document.querySelector(".addComment").classList.remove("show")
        }
        this.getData(this.props.match.params.id)

    }
    moveToInputCM = () => {
        window.scroll({
            top: this.inputCM.current.offsetTop + 80,
            behavior: 'smooth'
        })
        this.inputCM.current.focus()
    }
    pushProductToCart = (e) => {
        if (!this.state.user) {
            alert("Bạn chưa đăng nhập")
            e.target.value = 0
        } else {
            if (e.target.value == 0) {
                var name = e.target.name;
                getSession()
                    .then(data => {
                        var orderListTemp = data.data.session.order ? data.data.session.order.orderList : []
                        var onePro = orderListTemp.filter(x => x.id == name)
                        var index = orderListTemp.findIndex(x => x.id == name)
                        if (index > -1) {
                            orderListTemp.splice(index, 1)
                            upDateSession({ orderList: orderListTemp })
                                .then(data => {
                                    console.log(data)
                                    this.props.changeProNu(data.data.session.order.orderList.length);
                                })
                                .catch(err => console.log(err))
                        }
                    })
            }
            else {
                var name = e.target.name;
                var amount = e.target.value;
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
                                        orderListTemp.splice(index, 1);
                                    }
                                    orderListTemp.push({
                                        product: data.data.productFound._id,
                                        id: data.data.productFound._id,
                                        shopID: {
                                            _id: data.data.productFound.shopID._id
                                        },
                                        name: data.data.productFound.name,
                                        image: data.data.productFound.image,
                                        price: data.data.productFound.price,
                                        amount: amount
                                    })
                                }
                                else {
                                    orderListTemp.push({
                                        product: data.data.productFound._id,
                                        id: data.data.productFound._id,
                                        shopID: {
                                            _id: data.data.productFound.shopID._id
                                        },
                                        name: data.data.productFound.name,
                                        image: data.data.productFound.image,
                                        price: data.data.productFound.price,
                                        amount: 1
                                    })
                                }
                                createSession({ owner: this.state.user._id, orderList: orderListTemp })
                                    .then(data => {
                                        console.log(data.data)
                                        this.props.changeProNu(data.data.order.orderList.length);
                                    })
                                    .catch(err => console.log(err))
                            })
                    })
                    .catch(err => console.log(err))
            }
        }
    }
    submitComment = (e) => {
        e.preventDefault();
        if (this.state.user && document.getElementsByClassName("userInputCM")[0].value != "") {
            this.setState({
                modal: false
            });
            var commentsTemp = this.state.shop.comments
            var newComment = {
                owner: this.state.user,
                content: document.getElementsByClassName("userInputCM")[0].value,
            }
            commentsTemp.push(newComment)

            // console.log(this.state.shop)//state shop.comment tu dong thay doi
            updateInfoShopByID(this.state.shop._id, { comments: this.state.shop.comments })
                .then(data => {
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
        else if (!this.state.user) {
            alert("Bạn chưa đăng nhập")
            this.setState({
                modal: true
            });
        }
    }
    render() {
        var allProduct, comments, related;
        if (this.state.shops) {
            related = this.state.shops.map((shop, index) => {
                // console.log(shop)
                if (index < 4)
                    return (
                        <Link to={"/shop/" + shop._id} key={shop._id} className="col-md-3">
                            <div className="card otherNews">
                                {shop.productList[0] ? <img className="card-img-top" src={shop.productList[0].image} alt="" /> : ""}
                                <div className="card-body">
                                    <div className="userOtherNews">{shop.title}</div>
                                    <hr />
                                    <div className="foodOtherNews">{shop.description}</div>
                                </div>
                            </div>
                        </Link>
                    )
            })
        }
        if (this.state.shop) {

            comments = this.state.shop.comments.map((comment, index) => {
                return (
                    <div key={index} className="oneComment row">
                        <div className="col-md-1">
                            <div className="avatarUserComment">
                                <img src={comment.owner.avatarUrl} />
                            </div>
                        </div>
                        <div className="col-md-11">
                            <a className="userNameComment">{comment.owner.name}</a>
                            <span className="timeStamp"><Moment format="YYYY/MM/DD HH:mm" date={comment.createAt} /></span>
                            <div className="userComment">{comment.content}</div>
                        </div>
                    </div>
                )
            })
            var tempProductImg = []
            allProduct = this.state.shop.productList.map((product, index) => {
                tempProductImg.push(product.image)
                return (
                    <div key={index} className={"oneFood " + "food" + index + " mb-3"}>
                        <div className="foodImg">
                            <img src={product.image} />
                        </div>
                        <div className="foodName">{product.name}</div>
                        <input type="number" name={product._id} onChange={this.pushProductToCart} defaultValue={0} min={0} max={100} className="slsp" />
                        <div className="foodPrice">{product.price}</div>
                    </div>
                )
            })
        }
        // console.log(tempProductImg)
        return (

            <div>
                <div className="container-fluid details pb-3 pt-3">
                    <div className="container detailsStatus mt-3">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col-md-2">
                                        <div className="avatarHost ">
                                            {this.state.shop.owner ? <img src={this.state.shop.owner.avatarUrl} /> : ""}
                                        </div>
                                        {/* <div className="cart mt-3">
                                            {(this.state.shop) ? <OrderListInShop shopID={this.state.shop._id} orderData={this.state.shop.listOrder} /> : ''}
                                            <h6 className="mt-2">Ordered in shop</h6>
                                        </div> */}
                                    </div>
                                    <div className="mainStatus col-md-10">
                                        <h4>
                                            {this.state.shop.owner ? <a >{this.state.shop.owner.name}</a> : ""}
                                        </h4>
                                        {this.state.shop.owner ? <h5>{this.state.shop.title}</h5> : ""}
                                        {this.state.shop.owner ? <p>{this.state.shop.description}</p> : ""}
                                        <div className="foodShop">
                                            {allProduct}
                                        </div>
                                        <Link to={"/cart"} className="col-md-3" style={{ padding: "0" }}>
                                            <div className="btn btn-danger" style={{ width: "100%" }} >Order ngay</div>
                                        </Link>
                                        <div className="expressBar mt-3">
                                            <i className="far fa-heart" />
                                            <i className="far fa-comment" ref={this.comment} onClick={this.moveToInputCM} />
                                        </div>
                                        <div className="container containerSlide">
                                            <div className="slide">
                                                {tempProductImg ? <Banner img={tempProductImg} /> : ""}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 Comment">
                                {comments}
                                <div className="oneComment  presentUserCM row">
                                    <div className="col-md-1 avatarUserCol">
                                        <div className="avatarUserComment avatarUser">
                                            <img src={this.state.user ? this.state.user.avatarUrl : ""} />
                                        </div>
                                    </div>
                                    <div className="col-md-11">
                                        <form onSubmit={this.submitComment}>
                                            <input type="text" cols={30} rows={6} className="userInputCM" ref={this.inputCM} placeholder="Thêm bình luận" defaultValue={""} />
                                            <div className="comment-arrow" />
                                            <input style={{ marginTop: 20 }} type="submit" className="addComment" value="Bình luận" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container related mb-3">
                        <div className="container">
                            <h5>BÀI VIẾT KHÁC</h5>
                            <div className="row">
                                {related}

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        );
    }
}

export default Shop;