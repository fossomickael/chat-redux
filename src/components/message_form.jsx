import React, { Component } from 'react'; 


class MessageForm extends Component {

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="channel-editor">
        <   input
            
            onChange={this.handleChange}
            />
            <button type="submit">Send</button>
        </form>
      );
    }

}


export default MessageForm;