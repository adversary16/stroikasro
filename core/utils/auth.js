const jwt = require('jsonwebtoken');
const {JWT_TOKEN, JWT_TOKEN_EXPIRATION} = require('../const');

const generateAccessToken = ({username, password}) => {
  const expiresIn = '1800d';
  return jwt.sign({username, password}, JWT_TOKEN, {expiresIn});
};

module.exports = generateAccessToken;
