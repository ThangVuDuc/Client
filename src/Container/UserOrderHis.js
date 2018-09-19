import React, { Component } from 'react';
import OneOrderHisPro from "../components/OneOrderHisPro"
class UserOrderHis extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:100,marginBottom:100}}>
                <h6>19/9/2019</h6>
                <OneOrderHisPro/>
                <OneOrderHisPro/>
                <OneOrderHisPro/>
                <hr/>
            </div>

        );
    }
}

export default UserOrderHis;