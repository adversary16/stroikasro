const express = require('express');
const user = require('../../models/user');
const {generateAccessToken, verifyCredentials, registerUser} = require('../../utils/auth');
const errorHandler = require('../../utils/errorHandler');
const router = express.Router();

router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const getToken = await verifyCredentials({username, password});
  if (getToken) {
    return res.status(200).json({token: getToken});
  } else {
    return res.status(401).json({
      error: 'logon failed',
    });
  }
});

router.post('/logon', async (req, res) => {
  const {username, password} = req.body;
  try {
    const result = await registerUser({username, password});
    res.status(200).json({result});
  } catch (error) {
    res.status(40).json({error: errorHandler(error)});
  }
});

module.exports = router;
