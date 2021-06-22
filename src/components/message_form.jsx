import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';
import { setMessages } from "../actions/index.js"

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
      }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
        this.props.setMessages(this.props.selectedChannel);
    }

      handleChange = (event) => {
        this.setState({ value: event.target.value });
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="channel-editor">
        < input
            value={this.state.value}
            onChange={this.handleChange}
            />
            <button type="submit">Send</button>
        </form>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      messages: state.messages,
      selectedChannel: state.selectedChannel,
      currentUser: state.currentUser
    };
  }


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createMessage, setMessages }, dispatch);
  }


export default  connect(mapStateToProps, mapDispatchToProps)(MessageForm);