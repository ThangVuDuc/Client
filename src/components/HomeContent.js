import React, { Component } from 'react';
import axios from 'axios'
class HomeContent extends Component {

  state = {
    shops: []
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/shop')
      .then((response) => {
        this.setState({ shops: response.data.shops })
        console.log(this.state.shops)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
 
  render() {
    var allShops=this.state.shops.map(shop => {
      console.log(shop._id)
      return (
        <div key={shop._id} className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
            <a href={"/shop/"+shop._id}><img className="card-img-top" src={shop.owner.avatarUrl} alt="" /></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="">{shop.title}</a>
              </h4>
              <p className="card-text">{shop.description}</p>
            </div>
          </div>
        </div>
      )})
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