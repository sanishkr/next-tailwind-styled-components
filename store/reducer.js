import { combineReducers } from 'redux';
import { reducer as postsReducer } from './posts';

export default combineReducers({
  postsReducer,
});
