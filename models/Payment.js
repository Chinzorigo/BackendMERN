const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        max: 1000000000
    },
    paymentType: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }

})

module.exports = mongoose.model("Payment", PaymentSchema);