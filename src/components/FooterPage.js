
import React from 'react';

import {Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css'

import Banner1 from '../img/Banner1 2.jpg';
import Banner2 from '../img/Banner2 2.jpg';
import Banner3 from '../img/Banner3 2.jpg';
import Tan from '../img/Tan.jpg';
import Thang from '../img/Thang.JPG';
import Hoang from '../img/Hoang.jpg';
import Duc from '../img/Duc.jpg';

class FooterPage extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div className="footer">
                <Container fluid>
                    <Row>
                        <Col>
                            <Slider className='img-fluid mb-5' {...settings}>
                                <div>
                                    <img src={Banner1} className='img-fluid' />
                                </div>
                                <div>
                                    <img src={Banner2} className='img-fluid' />
                                </div>
                                <div>
                                    <img src={Banner3} className='img-fluid' />
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
                <div className="container text-center">
                    <h2>HOLA FOOD</h2>
                    <h3>We love food!</h3>
                    <h3>We have created a food hola website.</h3>
                    <br />
                    <p>Được xây dựng từ giữa năm 2018 tại Hòa Lạc, Hà Nội, Food Hola là cộng đồng tin cậy cho sinh viên có thể tìm kiếm,
                        đánh giá, bình luận các địa điểm ăn uống: nhà hàng, quán ăn, cafe, bar, karaoke, tiệm bánh, khu du lịch... tại
                        Việt Nam - từ website. Tất cả thành viên từ Bắc đến Nam, Food Hola kết nối mọi sinh viên đến với các địa điểm
                        ăn uống lớn nhỏ cả đất nước. Đến thời điểm hiện tại, Food Hola với hàng chục địa điểm và hàng trăm ngàn bình
                        luận, hình ảnh tại Việt Nam, ở hầu hết miền Bắc. Food Hola là cách dễ nhất để bạn có thể tìm kiếm và lựa chọn
            địa điểm và những món ăn tốt nhất cho mình và bạn bè.</p>

                    <br />
                    <br />
                    <h3>Thành Viên Sáng Lập</h3>
                    <br />
                    <br />
                    <Row>
                        <Col sm="3">
                            <p className="text-center"><strong>Phùng Minh Hoàng</strong></p><br />
                            <img src={Hoang} id="Hoang" alt="" />
                            <div>
                                <h4>CHIEF FINANCIAL OFFICER</h4>
                                <p>Sinh năm: 1997</p>
                                <p>Học viện công nghệ bưu chính viễn thông</p>
                            </div>
                        </Col>
                        <Col sm="3">
                            <p className="text-center"><strong>Nguyễn Bảo Tân</strong></p><br />
                            <img src={Tan} id="Tan" alt="" />
                            <div>
                                <h4>CHIEF PRODUCTION OFFICER</h4>
                                <p>Sinh năm: 1998</p>
                                <p>Đại học FPT</p>
                            </div>
                        </Col>
                        <Col sm="3">
                            <p className="text-center"><strong>Vũ Đức Thắng</strong></p><br />
                            <img src={Thang} id="Thang" alt="" />
                            <div>
                                <h4>CHIEF EXECUTIVE OFFICER</h4>
                                <p>Sinh năm: 1998</p>
                                <p>Đại học FPT</p>
                            </div>
                        </Col>
                        <Col sm="3">
                            <p className="text-center"><strong>Bùi Minh Đức</strong></p><br />
                            <img src={Duc} id="Duc" alt="" />
                            <div>
                                <h4>CHIEF MARKETING OFFICER</h4>
                                <p>Sinh năm: 1998</p>
                                <p>Đại học FPT</p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="ending">
                    <p>Hola Food Made By <a href="https://www.holafood.com">www.holafood.com</a></p>
                </div>
            </div>
        );
    }
}

export default FooterPage;