import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer';

const middlewares = [thunkMiddleware, promiseMiddleware];
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const makeStore = initialState => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};

export default makeStore;
