const jwt = require('jsonwebtoken');
const {JWT_TOKEN} = require('../const');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_TOKEN, (err, user) => {
    console.log(err);

    if (err) return res.status(403).json({error: 'a'});

    req.user = user;

    next();
  });
};

module.exports = authenticateToken;
