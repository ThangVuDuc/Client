import React, { Component } from 'react';
import {
<<<<<<< HEAD
    BrowserRouter as Router,
    Route,
=======
>>>>>>> MInhDuc
    Link
  } from 'react-router-dom'
class OneShopDiv extends Component {
    render() {
        return (
            <Link to={"/shop/" + this.props.link} className="col-lg-4 col-sm-6 portfolio-item mb-3">
            <div className="card h-100">
              {this.props.shop.productList[0] ? <img className="card-img-top" src={this.props.shop.productList[0].image} alt="" /> : ""}
              <div className="card-body">
                <h4 className="card-title">
                  <div>{this.props.shop.title}</div>
                </h4>
                <p className="card-text">{this.props.shop.description}</p>
              </div>
            </div>
          </Link>
        );
    }
}

export default OneShopDiv;