import React, { Component } from 'react';
import { Container, Row, Col,} from "reactstrap"
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileContent from '../components/ProfileContent';
import OrderHistory from '../components/OrderHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserById } from "../networks/userData";
class Profile extends Component {

    state = {
    }

    componentDidMount() {
        getUserById("5b9d191df7b8a613d1d6fd7f")
            .then( user => console.log(user))
    }

    render() {
        return (
            <Container bootstrap snippet >
                <Row>
                    <Col sm='3' className='text-center'>
                        <img src />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;