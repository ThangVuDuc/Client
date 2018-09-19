import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

import Slider from "react-slick";

class Banner extends Component {
  render() {
    const settings = {
      fade: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    var slide;
    slide = this.props.img.map((img, index) => {
      return (
        <div key={index}>
          <img src={img} />
        </div>
      )
    })
    return (
      <div className="banner">
        <Container fluid>
          <Row>
            <Col>
              <Slider className='fixed' {...settings}>
                {slide}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Banner;