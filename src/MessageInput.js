import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class MessageInput extends Component {
    state = {
        msg: ''
    }
    inputIsEmpty = () => {
      return (this.state.msg ==='')
    };
    handleChange = (event) => {   
      this.setState(
        { msg: event.target.value }
      );
    }
	transmitMessage = () => {
      console.log("transmit the message " + this.state.msg);
    }
	render() {
		return(
            <div>
              <form className="input-group" onSubmit={this.transmitMessage}>
                <input type="text"
					   value={this.state.msg}
					   className="form-control" 
					   placeholder="Enter your message..." 
      				   onChange={this.handleChange}/>

                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.inputIsEmpty()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
	    )
	}
}


export default MessageInput;