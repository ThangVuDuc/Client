import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import logo from '../img/logo.png';
import logo1 from '../img/logo1.png';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="5">
                        <img src={logo1} className="logo1"/>
                        <img src={logo} className="logo"/>
                    </Col>
                    <Col sm="2">
                        <h6 className="title">Công ty</h6>
                        <hr/>
                        <ul>
                        <li className="list-unstyled"><a href="#!">Giới thiệu</a></li>
                        <li className="list-unstyled"><a href="#!">Trợ giúp</a></li>
                        <li className="list-unstyled"><a href="#!">Nhà đầu tư</a></li>
                        <li className="list-unstyled"><a href="#!">Liên hệ</a></li>
                        </ul>
                    </Col>
                    <Col sm="2">
                        <h6 className="title">Tham gia trên</h6>
                        <hr/>
                        <ul>
                        <li className="list-unstyled"><a href="#!">Facebook</a></li>
                        <li className="list-unstyled"><a href="#!">Instagram</a></li>
                        <li className="list-unstyled"><a href="#!">Youtube</a></li>
                        <li className="list-unstyled"><a href="#!">Google</a></li>
                        </ul>
                    </Col>
                    <Col sm="2">
                        <h6 className="title">Giấy phép</h6>
                        <hr/>
                        <ul>
                        <li className="list-unstyled"><a href="#!">ICP Thang chito</a></li>
                        <li className="list-unstyled"><a href="#!">ICP Tan chibe</a></li>
                        <li className="list-unstyled"><a href="#!">ICP Duc BM</a></li>
                        <li className="list-unstyled"><a href="#!">ICP Hoang PM</a></li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> Holafood.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;