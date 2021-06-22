import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectChannel } from "../actions/channel.js"
import { setMessages } from "../actions/index.js"
import { Link } from 'react-router-dom'; 
class ChannelList extends Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.setMessages(nextProps.channelFromParams);
    }
  }



  renderChannel = (channel) => {

    return (
      <li
        key={channel}
        className={channel === this.props.channelFromParams ? 'active' : null}
        
        role="presentation"
      >
       <Link to={`/${channel}`}>
          #{channel}
      </Link> 
      </li>
    );
  }

    render() {
        return (
          <div className="channels-container">
            <span>Redux Chat</span>
            <ul>
            {this.props.channels.map(this.renderChannel)}
            </ul>
          </div>
        );
      }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectChannel , setMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

