const express = require('express');
const authenticateToken = require('../../middlewares/auth');
const {getAllCompanies} = require('../../modules/companies');
const {getStructure, getFullStructureTree} = require('../../modules/content');
const {getAllUsers} = require('../../modules/users');
const contentEditorRoutes = require('./content/');
const rosterEditorRoutes = require('./roster');
const router = express.Router();

router.use('/content', contentEditorRoutes);
router.use('/companies', rosterEditorRoutes);
router.post('/getDashboard', async (req, res) => {
  const structure = await getFullStructureTree();
  const users = await getAllUsers();
  const companies = await getAllCompanies();
  res.status(200).json({structure, users, companies});
});


router.post('/', (req, res) => {});

module.exports = router;
