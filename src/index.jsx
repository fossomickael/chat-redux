// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import messages_reducer from './reducers/messages_reducer';
import channels_reducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import { logger } from 'redux-logger'; 
import promise from 'redux-promise-middleware'

const identityReducer = (state = null) => state;

const composeStoreWithMiddleware = applyMiddleware(
  promise, logger
)(createStore)

const initialState = {
  channels: ['586', 'react', 'paris'],
  selectedChannel: '586',
  currentUser: 'Mickael FOSSO'
};

// State and reducers
const reducers = combineReducers({
  messages: messages_reducer,
  channels: channels_reducer,
  selectedChannel: selectedChannelReducer,
  currentUser: identityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={composeStoreWithMiddleware(reducers, initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
