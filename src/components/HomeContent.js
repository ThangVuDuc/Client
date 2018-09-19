import React, { Component } from 'react';
import axios from 'axios'

import { ROOT_API } from "../static/index"
import OneShopDiv from "./OneShopDiv"
class HomeContent extends Component {

  state = {
    shops: [],
    user: null
  }

  componentDidMount = () => {
    axios.get(`${ROOT_API}/shop`)
      .then((response) => {
        // console.log(response)
        this.setState({ shops: response.data.shopFound })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  componentDidUpdate() {
    if (!this.state.user&&this.props.user) {
      this.setState({ user: this.props.user })
      console.log( this.state.user);
    }
  }

  render() {
    var allShops
    console.log( this.state.user);
    if (this.state.shops) {
      allShops = this.state.shops.map(shop => {
        // console.log(shop)
        if(shop.openOrClose){
          if (this.state.user) {
            if(shop.owner._id==this.state.user._id){
              return (
                <OneShopDiv key={shop._id} shop={shop} link={shop._id+"/manager"} />
              )
            }
          }
          return (
            <OneShopDiv key={shop._id} shop={shop} link={shop._id} />
          )
        }
      })
    }
    return (
      <div className="container mt-3">
        <div className="row">
          {allShops}
        </div>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>

    );
  }
}

export default HomeContent;