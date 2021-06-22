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

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
 



const identityReducer = (state = null) => state;

const composeStoreWithMiddleware = applyMiddleware(
  promise, logger
)(createStore)

const initialState = {
  channels: ['586', 'react', 'paris'],
  currentUser: 'Mickael FOSSO'
};

// State and reducers
const reducers = combineReducers({
  messages: messages_reducer,
  channels: channels_reducer,
  currentUser: identityReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={composeStoreWithMiddleware(reducers, initialState)}>
    <Router history={history}>
      <Switch>
          <Route path="/:channel" component={App} />
          <Redirect from="/" to="/586" />    
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
