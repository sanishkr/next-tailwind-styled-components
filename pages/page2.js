import React from 'react';
import ArticlesList from '../layouts/ArticlesList';
import Header from '../components/Header';

import '../assets/css/pages/page2.css';

const articlesData = [
  {
    id: 1,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 2,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 3,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 4,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 5,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 6,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 7,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 8,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
  {
    id: 9,
    imgUrl: 'images/card-top.jpg',
    imgAlt: 'Sunset in the mountains',
    title: 'The Coldest Sunset',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    tags: ['photography', 'travel', 'winter'],
  },
];

export default () => {
  return (
    <>
      <Header></Header>
      <ArticlesList articleList={articlesData}></ArticlesList>
    </>
  );
};
