const db = require('../models');

// Define methods for expenses
module.exports = {
    add: function (req, res) {
        db.Expense
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getAll: function (req, res) {
        db.Expense
            .find({})
            .sort({ date: 1 })
            .then(dbModels => res.json(dbModels))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Expense
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Expense
            .deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}