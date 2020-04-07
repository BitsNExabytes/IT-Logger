import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// initial state
const initialState = {};

// array of middleware used
const middleware = [thunk];

/*
    Create store takes in the root reducer , initial state and any middleware

*/
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
