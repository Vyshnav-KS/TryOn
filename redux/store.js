import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

// Define initial state
const initialState = {};

// Define reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Define case statements for different actions
    default:
      return state;
  }
};

// Define middleware array
const middleware = [thunkMiddleware];

// Only use logger in development environment
if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

// Create store with initial state, reducer, and middleware
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
