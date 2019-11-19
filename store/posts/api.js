import axios from 'axios';
// import { parseCookies } from 'nookies';
const getConfig = require('next/config');
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig.default();

// const cookies = new parseCookies();
// console.log({cookies, publicRuntimeConfig});

const getPosts = () =>
  axios.get(`${publicRuntimeConfig.configs.api}/posts`).catch(() => ({
    data: [],
  }));

const getOnePost = ({ id }) =>
  axios.get(`${publicRuntimeConfig.configs.api}/posts/${id}`).catch(() => ({
    data: {},
  }));

export default { getPosts, getOnePost };
