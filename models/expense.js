const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        enum: ['Groceries', 'Bills & Utilities', 'Auto & Transport', 'Medical', 'Clothing', 'Travel', 'Loans', 'Household', 'Fun', 'Gifts', 'Other']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: [30, 'Must be no more than 30 characters long, got {VALUE}']
    },
    amount: {
        type: Number,
        required: true,
        min: [0.01, 'Must be a value of at least $0.01.']
    }
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;