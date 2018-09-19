import React, { Component } from 'react'; class OneOrderHisPro extends Component {
    render() {
        return (
            <div >
                <div class="row">
                    <div className="card col-12 " style={{ height: 140, overflow: 'hidden' }}>
                        <div class="row">
                            <div className="col-2">
                                <img src="http://thuvienanhdep.net/wp-content/uploads/2016/02/hinh-anh-gai-xinh-mac-ao-dai-dep-an-tuong-nhat-nam-20162.jpg" style={{ width: '100%' }} alt="Card image cap" />
                            </div>
                            <div className="card-body col-10">
                                <div class="row" style={{}}>
                                    <h6 className="card-title col-8">Tên sản phẩm</h6>
                                    <h6 className="card-title col-4">Qty: 3</h6>
                                </div>
                                <hr style={{ margin: 0 }} />
                                <div class="row mt-1">
                                    <h6 className="card-title col-4">Địa chỉ giao hàng</h6>
                                    <p className="card-title col-5"> Huyện Thạch Thất, Xã Thạch Hòa</p>
                                    <p className="card-title col-3">SĐT:12352343412</p>
                                </div>
                                <div class="row">
                                    <h6 className="card-title col-12">Total: 213000</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} export default OneOrderHisPro;