import typeToReducer from 'type-to-reducer';
import { actions } from './actions';

const initialState = {
  ui: {
    loading: false,
  },
  data: {},
  error: '',
};

const postsReducer = typeToReducer(
  {
    [actions.GET_POSTS]: {
      PENDING: state => {
        return Object.assign({}, state, { ui: { loading: true } });
      },
      FULFILLED: (state, action) => {
        return Object.assign({}, state, {
          data: {
            ...state.data,
            ...action.payload.data,
          },
          ui: { loading: false },
        });
      },
      REJECTED: (state, action) => {
        return Object.assign({}, state, {
          error: action.payload.message,
          ui: { loading: false },
        });
      },
    },
  },
  initialState,
);

export default postsReducer;
