import React, { Component } from 'react';
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import Slider from "react-slick";

class ShopSlider extends Component {


    render() {
        const settings = {
            fade: true,
            pauseOnHover: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };

        const slider = this.props.productList.map((product, index) => {
            return <div key={index}>
                <img src={product.image} className='img-fluid' />
            </div>
        })

        return (
            <div>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {slider}
                        </Slider>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ShopSlider;