import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class HomeContent extends Component {

  state = {
    shops: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/shop')
      .then((response) => {
        console.log(response)
        this.setState({ shops: response.data.shopFound })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
 
  render() {
    var allShops
    if(this.state.shops){
      allShops=this.state.shops.map(shop => {
        console.log(shop)
        return (
          <Link to={"/shop/" + shop._id} key={shop._id} className="col-lg-4 col-sm-6 portfolio-item mb-3">
            <div className="card h-100">
            {shop.productList[0] ? <img className="card-img-top" src={shop.productList[0].image} alt="" /> : ""}
              <div className="card-body">
                <h4 className="card-title">
                  <div>{shop.title}</div>
                </h4>
                <p className="card-text">{shop.description}</p>
              </div>
            </div>
          </Link>
        )})
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