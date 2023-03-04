const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema ({
    serviceName: {
        type: String,
        required: true,
        maxlength: 50
    },
    serviceCategory: {
        type: String,
        required: true,
        maxlength: 50
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