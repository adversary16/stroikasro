const express = require('express');
const generateAccessToken = require('../../utils/auth');
const router = express.Router();

router.post('/logon', async (req, res) => {
  const {username, password} = req.body;
  if (username==='nikita') {
    const token = generateAccessToken({username, password});
    return res.status(200).json({username, token});
  }
  return res.status(401);
});

module.exports = router;
