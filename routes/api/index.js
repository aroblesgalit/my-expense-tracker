const router = require('express').Router();
const userRoutes = require('./user');
const expenseRoutes = require('./expense');

router.use('/user', userRoutes);
router.use('/expenses', expenseRoutes);

module.exports = router;