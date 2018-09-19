import React, { Component } from 'react';
import { Container, Row, Col,} from "reactstrap"
import ProfileSidebar from '../components/ProfileSidebar'
import ProfileContent from '../components/ProfileContent';
<<<<<<< HEAD
import OrderHistory from '../components/OrderHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
>>>>>>> MInhDuc
import { getInfoUserById } from "../networks/userData";
class Profile extends Component {

    state = {
        userData: null
    }

    componentDidMount() {
<<<<<<< HEAD
        getInfoUserById("5b9d191df7b8a613d1d6fd7f")
=======
        getInfoUserById(this.props.match.params.id)
>>>>>>> MInhDuc
            .then( user => {
                this.setState({
                    userData: user.data.user
                })
            })
    }

    render() {
        return (
            <Container bootstrap snippet >
<<<<<<< HEAD
                <Row className='img-thumbnail shadow p-3 mb-5 bg-white rounded mt-50 bg-light'>
                    <Col sm='3' className='text-center'>
                       {(this.state.userData) ?  <ProfileContent userData={this.state.userData} /> : ''}
=======
                <Row className='img-thumbnail shadow p-3 mb-5 bg-white rounded mt-50 mdbColorLighten5'>
                    <Col sm='3' className='text-center'>
                       {(this.state.userData) ?  <ProfileContent userData={this.state.userData} /> : ''}
                    </Col>
                    <Col sm='9' className='border-left'>
                    {(this.state.userData) ?  <ProfileSidebar userData={this.state.userData} /> : ''}
>>>>>>> MInhDuc
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;