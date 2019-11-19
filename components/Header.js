import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';
import { i18n, Link, withTranslation } from '../i18n';
import Router, { withRouter } from 'next/router';

const StyledNav = styled.nav`
  ${tw`flex items-center justify-between flex-wrap bg-teal-500 p-6`}
`;

const Header = ({ t, router }) => {
  const lng = i18n.language === 'ar' ? 'en' : 'ar';
  return (
    <StyledNav>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Tailwind CSS
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/page1">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              {t('page1')}
            </button>
          </Link>
          <Link href="/page2">
            <button className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              {t('page2')}
            </button>
          </Link>
        </div>
        <div>
          <button
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
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
