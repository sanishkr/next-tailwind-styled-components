import apis from './api';

const actions = {
  GET_POSTS: 'GET_POSTS',
};

const actionCreators = {
  getPosts: params => {
    return {
      type: actions.GET_POSTS,
      payload: apis.getPosts(),
    };
  },
};

export { actions, actionCreators };
