import React, { Component } from 'react';
import { UncontrolledCarousel, Col } from "reactstrap";
import { withRouter, Link } from "react-router-dom";


class ProductInProfile extends Component {
    state = {
        images: null
    }

    _handleGoToShop = (e) => {
        // e.preventDefault()
        // this.props.history.push(`/shop/${this.props.shop._id}/manager`)
        console.log("hu")
    }

    render() {

        let images = [];


        for (let i = 0; i < this.props.shop.productList.length; i++) {
            images.push({ src: this.props.shop.productList[i].image })
        }

        return (
            <Col sm='4' >
                <Link to={`/shop/${this.props.shop._id}/manager`} >
                    <div class="card" >

                        <div class="view overlay zoom " >
                            <UncontrolledCarousel items={images} className='img-thumbnail' />
                            {/* <img src={this.props.shop.productList[0].image} class=" img-thumbnail text-center card-img-top" alt="" /> */}
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-title font-weight-bold">{this.props.shop.title}</h4>
                            <p className="card-text">{this.props.shop.description}</p>
                        </div>
                    </div>
                </Link>
            </Col>
        );
    }
}

export default withRouter(ProductInProfile);