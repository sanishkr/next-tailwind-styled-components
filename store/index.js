import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer';

const makeStore = initialState => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, promiseMiddleware)),
  );
};

export default makeStore;
