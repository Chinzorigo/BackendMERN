const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required: [true, "Category оруулна уу"],
        unique: false,
        maxlength: [50, " "]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Category", CategorySchema)