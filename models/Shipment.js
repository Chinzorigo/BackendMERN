const mongoose = require("mongoose");

const ShipmentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        maxstlength: 150
    },
    receivedBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("Shipment", ShipmentSchema);