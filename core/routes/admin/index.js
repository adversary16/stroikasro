const express = require('express');
const authenticateToken = require('../../middlewares/auth');
const contentEditorRoutes = require('./content/');
const router = express.Router();

router.use('/content', contentEditorRoutes);

router.post('/', (req, res) => {});

module.exports = router;
