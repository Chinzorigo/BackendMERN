const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        maxlength: 100
    },
    price:{
        type: Number,
        required: true,
        max: 9999999999 
    },
    quantity: {
        type: Number,
        required: true,
        maxlength:9999999999
    },
    totalPrice: {
        type: Number,
        required: true,
        max: 9999999999

    },
    description: {
        type: String,
        required: true,
        maxlength: 150
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Order", OrderSchema);

