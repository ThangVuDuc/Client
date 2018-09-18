import React, { Component } from 'react';
import { Container, Nav, Navbar, NavItem, NavLink, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap"

class ProfileContent extends Component {
    render() {
        return (
            <div className='profile-content'>
                <Container>
                    <Row>
                        <Col md={{ size: 10, offset: 1 }}>
                            <Form>
                                <Row>
                                    <Col sm={{ size: '8', offset: '2' }}>
                                        <h3> Thông tin cá nhân </h3>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Label for="lastName" sm={3}>Tên</Label>
                                    <Col sm={9}> <Input type="text" id="lastName" placeholder="with a placeholder" /></Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="firstName" sm={3}>Họ</Label>
                                    <Col sm={9}> <Input type="text" id="firstName" placeholder="with a placeholder" /></Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="email" sm={3}>Email</Label>
                                    <Col sm={9}> <Input type="email" id="email" placeholder="with a placeholder" /></Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="gender" sm={3}>Giới Tính</Label>
                                    <Col sm={3}>
                                        <Input type="select" id="gender">
                                            <option>Lựa chọn</option>
                                            <option value='M'>Nam</option>
                                            <option value='F'>Nữ</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="date" sm={3}>Ngày sinh</Label>
                                    <Col sm={3}>
                                        <Input type="select" id="date">
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                        </Input>
                                    </Col>
                                    <Col sm={3}>
                                        <Input type="select" id="month">
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                        </Input>
                                    </Col>
                                    <Col sm={3}>
                                        <Input type="select" id="year">
                                            <option value='1997'>1997</option>
                                            <option value='1998'>1998</option>
                                            <option value='1999'>1999</option>
                                            <option value='2000'>2000</option>
                                            <option value='2001'>2001</option>
                                            <option value='2002'>2002</option>
                                            <option value='2003'>2003</option>
                                            <option value='2004'>2004</option>
                                            <option value='2005'>2005</option>
                                            <option value='2006'>2006</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="discription" sm={3}>Mô tả bản thân</Label>
                                    <Col sm={9}>
                                        <Input type="textarea" name="text" id="discription" />
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button>Lưu thay đổi </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default ProfileContent;