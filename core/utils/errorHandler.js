const errors = require('../const/errors.json');

const errorHandler = (error) => {
  return error._message;
};

module.exports = errorHandler;
