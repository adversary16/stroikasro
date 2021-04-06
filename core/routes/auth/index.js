const express = require('express');
const generateAccessToken = require('../../utils/auth');
const router = express.Router();

router.post('/logon', async (req, res) => {
  const {username, password} = req.body;
  console.log(username, password);
  const token = generateAccessToken({username, password});
  res.status(200).json({username, token});
});

module.exports = router;
