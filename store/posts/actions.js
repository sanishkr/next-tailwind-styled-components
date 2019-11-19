import apis from './api';

const actions = {
  GET_POSTS: 'GET_POSTS',
  GET_ONE_POST: 'GET_ONE_POST',
};

const actionCreators = {
  getPosts: params => {
    return {
      type: actions.GET_POSTS,
      payload: apis.getPosts(),
    };
  },
  getOnePost: params => {
    return {
      type: actions.GET_ONE_POST,
      payload: apis.getOnePost(params),
    };
  },
};

export { actions, actionCreators };
