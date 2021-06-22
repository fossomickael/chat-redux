import React from 'react';
import MessageList from '../containers/message_list'
import ChannelList from '../containers/channel_list'

const App = () => {
  return (
    <div className="app">
      <div className="w-25"><ChannelList /></div>
      <div className="messages"><MessageList /></div>
    </div>
  );
};

export default App;
