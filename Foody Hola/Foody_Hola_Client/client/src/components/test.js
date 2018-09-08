import React, { Component } from 'react';
import ReactModal from 'react-modal'

class Test extends Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: false,
        name: '',
        phone: '',
        room: '',
        detail:''
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal = (e) => {
      console.log(this.name.value, this.phone.value, this.room.value, this.detail.value)
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal} className="btn btn-primary">Order !!!</button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <input type="text" className="form-control" placeholder="Enter your name..." ref={input => this.name = input} />
            <input type="text" className="form-control" placeholder="Enter your phone..." ref={input => this.phone = input} />
            <input type="text" className="form-control" placeholder="Enter your room..." ref={input => this.room = input} />
            <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" ref={textarea => this.detail = textarea} />
            <button onClick={this.handleCloseModal} className="btn btn-primary">Order Now</button>
          </ReactModal>
        </div>
      );
    }
  }
export default Test;