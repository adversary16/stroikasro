const express = require('express');
const authenticateToken = require('../../middlewares/auth');
const {getStructure, getFullStructureTree} = require('../../modules/content');
const {getAllUsers} = require('../../modules/users');
const contentEditorRoutes = require('./content/');
const router = express.Router();

router.use('/content', contentEditorRoutes);
router.post('/getDashboard', async (req, res) => {
  const structure = await getFullStructureTree();
  const users = await getAllUsers();
  const roster = {};
  res.status(200).json({structure, users});
});

router.post('/', (req, res) => {});

module.exports = router;
