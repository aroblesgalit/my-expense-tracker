const router = require('express').Router();
const expensesController = require('../../controllers/expensesController');

// Matches with 'api/expenses'
router.route('/')
    .post(expensesController.add)

// Matches with 'api/expenses/:user'
router.route('/:user')
    .get(expensesController.getAll)

// Matches with '/api/expenses/:id'
router.route('/:id')
    .put(expensesController.update)
    .delete(expensesController.delete)

module.exports = router;