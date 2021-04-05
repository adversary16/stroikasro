const express = require('express');
const generateAccessToken = require('../../utils/auth');
const router = express.Router();

router.post('/logon', async (req, res) => {
  const {username, password} = req.body;
  const token = generateAccessToken({username, password});
  res.status(200).json({token});
});

module.exports = router;
