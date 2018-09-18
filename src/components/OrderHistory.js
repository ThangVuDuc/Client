import React, { Component } from 'react';
import { Container, Row, Col, Table } from "reactstrap"
class OrderHistory extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng/Loại/Ngày Đặt </th>
                                <th>Nơi Đặt</th>
                                <th>Người Giao</th>
                                <th>Tổng Tiền</th>
                                <th>Trạng Thái</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default OrderHistory;