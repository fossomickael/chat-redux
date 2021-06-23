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
        this.props.createMessage(this.props.channelFromParams, this.props.currentUser, this.state.value);
        this.props.setMessages(this.props.channelFromParams);
    }

      handleChange = (event) => {
        this.setState({ value: event.target.value });
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="simple_form search">
       
       <div className="search-form-control form-group">
        < input className="form-control string required"  
            id="search_query"
            value={this.state.value}
            onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-flat"><i className="fas fa-search"></i>Send</button>
        </div>
        </form>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      messages: state.messages,
      currentUser: state.currentUser
    };
  }


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createMessage, setMessages }, dispatch);
  }


export default  connect(mapStateToProps, mapDispatchToProps)(MessageForm);