const getPosts = store => {
  return store.postsReducer.data;
};

const getOnePost = store => {
  return store.postsReducer.post;
};

export { getPosts, getOnePost };
