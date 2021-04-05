const mongoose = require('mongoose');
const {MONGO_URI} = require('../const');

const initDb = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = initDb;
