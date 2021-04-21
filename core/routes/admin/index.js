const express = require('express');
const authenticateToken = require('../../middlewares/auth');
const {getStructure} = require('../../modules/content');
const contentEditorRoutes = require('./content/');
const router = express.Router();

router.use('/content', contentEditorRoutes);
router.post('/getDashboard', async (req, res) => {
  const structure = await getStructure();
  console.log('asdasd');
  res.status(200).json({structure});
});

router.post('/', (req, res) => {});

module.exports = router;
