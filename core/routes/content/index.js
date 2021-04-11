const express = require('express');
const {getPageById, getPageByRouteName} = require('../../modules/content');

const router = express.Router();

router.post('/', async (req, res) => {
  const {route} = req.body;
  const requestedPage = await getPageByRouteName({route});
  return res.status(200).json({page: requestedPage});
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const requestedPage = await getPageById({id});
  return res.status(200).json({page: requestedPage});
});

module.exports = router;
