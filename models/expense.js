const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true,
    enum: [
      'housing',
      'transportation',
      'food',
      'utilities',
      'medical',
      'savings',
      'debt',
      'personal',
      'miscellaneous'
    ]
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    min: [0.01, 'Must be a value of at least $0.01.']
  }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense
