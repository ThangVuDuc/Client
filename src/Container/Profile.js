import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileContent from '../components/ProfileContent';
import OrderHistory from '../components/OrderHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserById } from "../networks/userData";

class Profile extends Component {

    state = {
        infoUser: null,
        activeTab: 1
    }

    componentDidMount() {
        console.log('askjask')
        getUserById("5b9bd43954f0065688298919")
            .then(res => {
                this.setState({
                    infoUser: res.data.user
                })
            })
    }

    _toggleTabs = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        const showInfo = (this.state.infoUser) ? <Row>
            <Col sm='3' className='text-center mt-50' >
                <div className='text-center border-right'>
                    <img src={this.state.infoUser.avatarUrl} className='rounded-circle img-thumbnail img-fluid' />
                    <h2 className='mt-3' >{this.state.infoUser.name}</h2>
                </div>
            </Col>
            <Col sm='9' className=''>
                <Nav tabs>
                    <NavItem>
                        <NavLink active={ true }  >
                            Giới thiệu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={ false }  >
                            Các cửa hàng
                        </NavLink>
                    </NavItem>
                </Nav>
            </Col>
        </Row> : ''

        return (
            <Container bootstrap snippet  >
                {showInfo}
            </Container>
        );
    }
}

export default Profile;