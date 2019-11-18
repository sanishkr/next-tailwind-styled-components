const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ar'],
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  localeSubpaths: {
    en: 'en',
    ar: 'ar',
  },
});
