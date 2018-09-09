import React, { Component } from 'react';
import { Container, Nav, Navbar, NavItem, NavLink, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap"
import ProfileSidebar from './ProfileSidebar'
import ProfileContent from './ProfileContent';
import OrderHistory from './OrderHistory'
class Profile extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='3'>
                        <ProfileSidebar />
                    </Col>
                    <Col md='9'>
                        <ProfileContent />
                        {/* <OrderHistory/> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;