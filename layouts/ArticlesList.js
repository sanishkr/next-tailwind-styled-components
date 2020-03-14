import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import ArticleCard from '../components/ArticleCard';
import { withTranslation } from '../i18n';

const Header = styled.h1`
  ${'' /* ${tw`font-mono text-6xl text-center text-black text-gray-800`} */}
  ${tw`float-left ml-2 font-mono text-6xl text-center text-black text-gray-800 scale-50 skew-y-6 bg-gray-300 border-l-8 border-red-700`}
`;

const ArticleList = ({ articleList, t }) => {
  return (
    <>
      <Header className="transform">{t('articles')}</Header>
      <div css={tw`flex flex-wrap justify-around mx-4 mt-4`}>
        {articleList.map((article, i) => (
          <ArticleCard key={i} data={article}></ArticleCard>
        ))}
      </div>
    </>
  );
};

export default withTranslation('page2')(ArticleList);
