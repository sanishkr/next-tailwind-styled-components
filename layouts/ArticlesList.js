import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import ArticleCard from '../components/ArticleCard';
import { withTranslation } from '../i18n';

const Header = styled.h1`
  ${tw`font-mono text-6xl text-center text-black text-gray-800`}
`;

const ArticleList = ({ articleList, t }) => {
  return (
    <>
      <Header>{t('articles')}</Header>
      <div css={tw`flex flex-wrap justify-around mx-4 mt-4`}>
        {articleList.map((article, i) => (
          <ArticleCard key={i} data={article}></ArticleCard>
        ))}
      </div>
    </>
  );
};

export default withTranslation('page2')(ArticleList);
