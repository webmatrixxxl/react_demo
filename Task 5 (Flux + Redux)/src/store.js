import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReduser form './redusers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReduser,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
