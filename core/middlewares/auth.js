const jwt = require('jsonwebtoken');
const {JWT_TOKEN} = require('../const');
const userModel = require('../models/user');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader;
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, JWT_TOKEN, async (err, user) => {
    if (err) return res.status(401).json({err});
    const isValidUser = !!await userModel.findOne({_id: user.id});
    if (!isValidUser) res.status(401).json({error: 'token invalid'});
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
