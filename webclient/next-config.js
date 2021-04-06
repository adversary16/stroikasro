const nextTranslate = require('next-translate');

module.exports = nextTranslate();

module.exports = {
  async rewrites() {
    return [
      {
        source: `/v1/:path*`,
        destination: `${BASEURL}/v1/:path*`, // Proxy to Backend
      },
    ];
  },
};
