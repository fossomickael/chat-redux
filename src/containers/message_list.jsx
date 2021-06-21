import React, { Component } from 'react'; 
import Message from '../components/message.jsx'
import MessageForm from '../components/message_form.jsx'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setMessages } from "../actions/index.js"

class MessageList extends Component {

    componentDidMount() { 
        this.props.setMessages();
    }

    render() {
      return <div> {this.props.messages.map((message, index) => {
        return <Message key={message.author} message={message}  />;
      })} 
        <div><MessageForm /> </div>
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