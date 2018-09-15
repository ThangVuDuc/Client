import React, { Component } from 'react';
import Banner from '../Banner'

import { ROOT_API } from "../../static/index";

import axios from 'axios'
import Moment from 'react-moment';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Shop extends Component {
    state = {
        shop: "",
        shops: [],
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.getData(nextProps.match.params.id);
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
    componentDidMount() {
        document.querySelector(".userInputCM").onfocus = function () {
            document.querySelector(".addComment").classList.add("show")
        }
        // $(".userInputCM").on("focusout", function () {
        //     $(".addComment").removeClass("show")
        // })
        this.getData(this.props.match.params.id)

    }
    render() {
        var allProduct, slide, comments, related;
        if (this.state.shops) {
            related = this.state.shops.map((shop, index) => {
                console.log(shop)
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
                    <div className="oneComment row">
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
            slide = this.state.shop.productList.map((product, index) => {
                return (
                    <div>
                        <div className="imgSlide" style={{ backgroundImage: 'url(' + product.image + ')' }}>
                            <i className="fas fa-heart" />
                        </div>
                    </div>
                )
            })
            allProduct = this.state.shop.productList.map((product, index) => {
                return (
                    <div className={"oneFood " + "food" + index + " mb-3"}>
                        <div className="foodImg">
                            <img src={product.image} />
                        </div>
                        <div className="foodName">{product.name}</div>
                        <div className="minusFood">
                            <i className="fas fa-minus-square" name={index} />
                        </div>
                        <div className="quantity">0</div>
                        <div className="addFood">
                            <i className="fas fa-plus-square" name={index} />
                        </div>
                        <div className="foodPrice">{product.price}</div>
                    </div>
                )
            })
        }
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
                                        <div className="cart mt-3">
                                            <Link to={"/cart"}><i className="fas fa-shopping-cart" /></Link>
                                        </div>
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
                                        <div className="expressBar mt-3">
                                            <i className="far fa-heart" />
                                            <i className="far fa-comment" />
                                        </div>
                                        <div className="container containerSlide">
                                            <div className="slide">
                                                <Banner />
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
                                            <img src="./images/2.jpg" />
                                        </div>
                                    </div>
                                    <div className="col-md-11">
                                        <textarea cols={30} rows={10} className="userInputCM" placeholder="Thêm bình luận" defaultValue={""} />
                                        <div className="comment-arrow" />
                                        <button className="addComment">Bình luận</button>
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