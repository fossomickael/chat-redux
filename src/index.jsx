// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import messages_reducer from './reducers/messages_reducer';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import { logger } from 'redux-logger'; 
import promise from 'redux-promise-middleware'



const composeStoreWithMiddleware = applyMiddleware(
  promise, logger
)(createStore)


// State and reducers
const reducers = combineReducers({
  messages: messages_reducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={composeStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
