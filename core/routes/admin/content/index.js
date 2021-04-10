const express = require('express');
const mongoose = require('mongoose');
const {createOrUpdatePage, getPageById} = require('../../../modules/content');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({content: 'reached'});
});

router.put('/', async (req, res) => {
  const {user, body} = req;
  res.status(200).json({sucess: await createOrUpdatePage(body)});
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    return (
      res.status(200).json({page: await getPageById({id})})
    );
  }
  return (res.status(400).json({err: 'invalid id'}));
});

module.exports = router;
