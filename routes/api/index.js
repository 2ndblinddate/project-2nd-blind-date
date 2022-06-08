const router = require('express').Router();
const userRoutes = require('./userRoutes');
const questionRoutes = require('./questionsRoutes');

router.use('/user', userRoutes);
router.use('/question', questionRoutes);


module.exports = router;