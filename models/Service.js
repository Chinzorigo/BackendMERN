const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema ({
    serviceName: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    serviceCategory: {
        type: String,
        required: true,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
        maxlength:150
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("Service", ServiceSchema);