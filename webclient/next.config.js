
const nextTranslate = require('next-translate');
const {redirect} = require('next/dist/next-server/server/api-utils');

module.exports = {
  ...nextTranslate(),
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
  },
  distDir: '.next',
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/main',
      },
    ];
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};

