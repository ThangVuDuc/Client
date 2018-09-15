import React, { Component } from 'react';

class ChangeInfoShopInShopManager extends Component {
    render() {
        return (
            <div>
                <Modal size='lg' isOpen={this.props.orderModal} toggle={() => this.props.toggle()}>
                    <ModalHeader toggle={() => this.props.toggle()}>Đơn hàng của bạn</ModalHeader>
                    <ModalBody>
                        <Container fluid >
                            {listOrder}
                            {totalOrder}
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary">Thanh toán</Button>
                        <Button color="danger" onClick={() => this.props.toggle()}>Đóng</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ChangeInfoShopInShopManager;