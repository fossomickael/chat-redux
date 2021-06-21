import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions/index';


class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
      }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createMessage("586", "Mickael FOSSO", this.state.value);
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="channel-editor">
        <   input
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
      messages: state.messages
    };
  }


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createMessage }, dispatch);
  }


export default  connect(mapStateToProps, mapDispatchToProps)(MessageForm);