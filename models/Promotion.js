const mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [50, "Хямдралын гарчгийн урт 50 тэмдэгт"]
    },
    description: {
        type: String,
        maxlength: [150, "Хямдралын тайлбар <= 150 тэмдэгтээс бага байна."]
    },
    discountRate: {
        type: String,
        required: true,
        maxlength: [4, 'Хөнгөлөлтийн тэмдэгтийн урт 4 буюу түүнээс бага байна.']
        
    },
    startDate: { 
        type: String,
        required: true,
        // default: Date,
    },
    endDate: {
        type: String,
        required: true,
        // default: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Promotion", PromotionSchema);