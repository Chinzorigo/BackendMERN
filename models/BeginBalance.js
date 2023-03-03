const mongoose = require("mongoose");

const BeginBalanceSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        maxlength: 50
    },
    productId: {
        type: String,
        required: true,
        maxlength: 50
    },
    stock: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("BeginBalance",BeginBalanceSchema)