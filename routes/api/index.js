const router = require('express').Router()
const userRoutes = require('./user')
const expenseRoutes = require('./expense')
const incomeRoutes = require('./income')

router.use('/user', userRoutes)
router.use('/expenses', expenseRoutes)
router.use('/income', incomeRoutes)

module.exports = router
