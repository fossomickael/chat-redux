import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'

const App = (props) => {
  return (
    <div className="app">
      <div className="w-25">
        <ChannelList channelFromParams={props.match.params.channel}/>
        </div>
      <div className="messages">
        <MessageList channelFromParams={props.match.params.channel} />
      </div>
    </div>
  );
};

export default App;
