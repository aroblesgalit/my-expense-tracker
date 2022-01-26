const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
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

const Income = mongoose.model('Income', incomeSchema)

module.exports = Income
