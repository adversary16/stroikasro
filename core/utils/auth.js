const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {JWT_TOKEN, JWT_TOKEN_EXPIRATION, PASSWORD_HASHING_ROUNDS} = require('../const');
const user = require('../models/user');
const errorHandler = require('./errorHandler');


const generateAccessToken = ({username, password}) => {
  const expiresIn = '1800d';
  return jwt.sign({username, password}, JWT_TOKEN, {expiresIn});
};

const verifyCredentials = async ({username, password}) =>{
  const matchingUser = await user.findOne({
    email: username,
  });
  if (!matchingUser) return false;
  if (!await bcrypt.compare(password, matchingUser.password)) return false;
  return (await matchingUser.generateToken());
};

const registerUser = async ({username, password}) => {
  try {
    const createUser = await user.create({email: username, password});
    return createUser.save();
  } catch (e) {
    throw (e);
  }
};

module.exports = {generateAccessToken, verifyCredentials, registerUser};
