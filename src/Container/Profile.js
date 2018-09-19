import React, { Component } from 'react';
import { Container, Row, Col,} from "reactstrap"
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileContent from '../components/ProfileContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getInfoUserById } from "../networks/userData";
class Profile extends Component {

    state = {
        userData: null
    }

    componentDidMount() {
        getInfoUserById("5b9d191df7b8a613d1d6fd7f")
            .then( user => {
                this.setState({
                    userData: user.data.user
                })
            })
    }

    render() {
        return (
            <Container bootstrap snippet >
                <Row className='img-thumbnail shadow p-3 mb-5 bg-white rounded mt-50 bg-light'>
                    <Col sm='3' className='text-center'>
                       {(this.state.userData) ?  <ProfileContent userData={this.state.userData} /> : ''}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;