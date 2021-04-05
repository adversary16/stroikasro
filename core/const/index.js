module.exports = {
  JWT_TOKEN: process.env.JWT_TOKEN,
  SERVER: {
    PORT: process.env.SERVER_PORT || 4001,
  },
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
};
