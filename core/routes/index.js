const {Router} = require( 'express');
const authRoutes = require('./auth');
const router = Router();

router.use('/auth', authRoutes);

router.get('/health', async (req, res) =>{
  res.status(200).json({});
});

module.exports = router;
