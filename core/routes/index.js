const {Router} = require( 'express');
const authenticateToken = require('../middlewares/auth');
const authRoutes = require('./auth');
const router = Router();

router.use('/auth', authRoutes);

router.get('/health', authenticateToken, async (req, res) =>{
  res.status(200).json({});
});

module.exports = router;
