import React, { Component } from 'react'; 
import Message from '../components/message.jsx'
import MessageForm from '../components/message_form.jsx'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setMessages } from "../actions/index.js"

class MessageList extends Component {

    componentDidMount() { 
        this.props.setMessages(this.props.channelFromParams);
    }

    render() {
      return <div> {this.props.messages.map((message) => {
        return <Message key={message.created_at} message={message}  />;
      })} 
        <div><MessageForm channelFromParams={this.props.channelFromParams} /> </div>
      </div> 
        }
    }

const mapStateToProps = (state) => {
    return {
      messages: state.messages
    };
  }


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setMessages }, dispatch);
  }

export default  connect(mapStateToProps, mapDispatchToProps)(MessageList);