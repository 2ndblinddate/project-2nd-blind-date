const router = require('express').Router();
const userRoutes = require('./userRoutes');
const questionRoutes = require('./questionsRoutes');

router.use('/user', userRoutes);
router.use('/questions', questionRoutes);


module.exports = router;