const express = require('express');
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose');
const {createOrUpdatePage, getPageById, createOrUpdateMediaFiles} = require('../../../modules/content');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({content: 'reached'});
});

router.put('/', async (req, res) => {
  const {user, body} = req;
  res.status(200).json({sucess: await createOrUpdatePage(body)});
});

router.put('/file', upload.any(), async (req, res) => {
  const {body, files} = req;
  const result = await createOrUpdateMediaFiles({files});
  res.status(200).json(result);
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
