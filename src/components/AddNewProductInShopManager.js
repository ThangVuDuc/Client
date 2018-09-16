import React, { Component } from 'react';
import { Button } from "mdbreact";
import Base64 from 'react-file-base64';
import { uploadFile } from "../networks/imgurData";

class AddNewProductInShopManager extends Component {

    state = {
        isAddNew : false,
        productInfo: null,
        files: null
    }

    _getFile = (file) => {
        console.log(file)
        this.setState({
            files: file
        })
        uploadFile(file)
            .then(res => console.log(res))
    }

    render() {



        return (
            <div>
                <Button outline color='danger' size ='lg' >Thêm sản phẩm mới</Button>
                <Base64 multiple={false} onDone={this._getFile.bind(this)} />
            </div>
        );
    }
}

export default AddNewProductInShopManager;