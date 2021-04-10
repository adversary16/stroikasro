const {Router} = require( 'express');
const authenticateToken = require('../middlewares/auth');
const authRoutes = require('./auth');
const adminRoutes = require('./admin');
const contentRoutes = require('./content');
const router = Router();

router.use('/auth', authRoutes);
router.use('/content', contentRoutes);
router.use('/admin', authenticateToken, adminRoutes);

module.exports = router;
