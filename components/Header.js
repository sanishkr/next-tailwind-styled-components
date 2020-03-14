import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';
import { i18n, Link, withTranslation } from '../i18n';
import Router, { withRouter } from 'next/router';

const StyledNav = styled.nav`
  ${tw`flex flex-wrap items-center justify-between p-6 bg-teal-500`}
`;

const Header = ({ t, router }) => {
  const lng = i18n.language === 'ar' ? 'en' : 'ar';
  return (
    <StyledNav>
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">
          Tailwind CSS
        </span>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/page1">
            <button className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
              {t('page1')}
            </button>
          </Link>
          <Link href="/page2">
            <button className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
              {t('page2')}
            </button>
          </Link>
        </div>
        <div>
          <button
            href="#"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
            onClick={async () => {
              // setCookie({}, "language", i18n.language === "en" ? "ar" : "en");
              await i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
              Router.push(`/${i18n.language}${router.pathname}`);
            }}
          >
            {lng.toUpperCase()}
          </button>
        </div>
      </div>
    </StyledNav>
  );
};

export default withRouter(withTranslation('common')(Header));
