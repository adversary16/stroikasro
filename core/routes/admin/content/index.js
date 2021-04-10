const express = require('express');
const {createOrUpdatePage} = require('../../../modules/content');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({content: 'reached'});
});

router.put('/', async (req, res) => {
  const {user, body} = req;
  res.status(200).json({sucess: await createOrUpdatePage(body)});
});

module.exports = router;
