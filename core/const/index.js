module.exports = {
  JWT_TOKEN: process.env.JWT_TOKEN,
  JWT_TOKEN_EXPIRATION: process.env.JWT_TOKEN_EXPIRATION || 19220,
  SERVER: {
    PORT: process.env.SERVER_PORT || 4001,
  },
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
};
