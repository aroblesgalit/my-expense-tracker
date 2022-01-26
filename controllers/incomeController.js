const db = require('../models')

// Define methods for income
module.exports = {
  add: function (req, res) {
    db.Income.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  getAll: function (req, res) {
    db.Income.find({ user: req.params.user })
      .sort({ date: -1 })
      .then(dbModels => res.json(dbModels))
      .catch(err => res.status(422).json(err))
  },
  delete: function (req, res) {
    db.Income.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
