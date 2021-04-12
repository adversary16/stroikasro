const express = require('express');
const mongoose = require('mongoose');
const {STORAGE_PATH} = require('../../const');
const {getPageById, getPageByRouteName, getStructure} = require('../../modules/content');

const router = express.Router();

router.post('/', async (req, res) => {
  const {route} = req.body;
  const requestedPage = await getPageByRouteName({route});
  return res.status(200).json({...requestedPage});
});

router.get('/media/:filename', async (req, res) => {
  const {filename} = req.params;
  const [fileId] = filename.split('.').splice(0, 1);
  return res.sendFile(`${STORAGE_PATH.PROCESSED}/${filename}`);
});

router.get('/structure', async (req, res) => {
  return res.status(200).json(await getStructure());
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'invalid_id'});
  }
  const requestedPage = await getPageById({id});
  return res.status(200).json({...requestedPage});
});


module.exports = router;
