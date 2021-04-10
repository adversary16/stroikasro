const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({content: 'reached'});
});

router.put('/', (req, res) => {
  res.status(200).json({put: 'here'});
});

module.exports = router;
