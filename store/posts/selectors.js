const getPosts = store => {
  return store.postsReducer.data;
};

export { getPosts };
