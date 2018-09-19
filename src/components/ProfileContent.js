import React, { Component } from 'react';


class ProfileContent extends Component {
    render() {

        const genderShow = (this.props.userData.gender) ? <span><i className="fas fa-transgender pink-text"></i> Nữ </span> : <span><i className="fas fa-transgender blue-text"></i> Nam </span> ;

        return (
            <div className='mt-4' >
                {/* <img src={this.props.userData.avatarUrl} className=' rounded img-thumbnail' /> */}
               
                <h3 className='mt-3 font-weight-bold cyan-text' >{this.props.userData.name}</h3>
                <ul class="list-group list-group-flush mt-4">
                    <li className="list-group-item font-weight-bold">Thông tin cá nhân</li>
                    <li className="list-group-item"> {genderShow}</li>
                    <li className="list-group-item"><i className="fas fa-at deep-orange-text"></i> {this.props.userData.email}</li>
                </ul>
            </div>

        );
    }
}

export default ProfileContent;