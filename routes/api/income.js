const router = require('express').Router()
const incomeController = require('../../controllers/incomeController')

// Matches with '/api/income'
router.route('/').post(incomeController.add)

// Matches with '/api/income/:user'
router.route('/:user').get(incomeController.getAll)

// Matches with '/api/income/:id'
router.route('/:id').delete(incomeController.delete)

module.exports = router
