const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    description: { type: String },
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;