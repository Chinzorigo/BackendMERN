const mongoose = require("mongoose");

const ServiceCategorySchema = new mongoose.Schema ({
    serviceCategoryName: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
})

module.exports = mongoose.model("ServiceCategory", ServiceCategorySchema);