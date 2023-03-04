const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema ({
    unit: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }

});

module.exports = mongoose.model("Unit", unitSchema);