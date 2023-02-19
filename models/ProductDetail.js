const mongoose = require("mongoose");

const ProductDetailSchema = new mongoose.Schema({
    size: {
        type: String,
        maxlength: [50, "Size-ны тэмдэгтийн урт дээд тал нь 50 байна."]
    },
    color: {
        type: String,
        maxlength: [50, "Color-н тэмдэгтийн урт дээд тал нь 50 байна."]
    },
    material: {
        type: String,
        maxlength: [50, "Material-н тэмдэгтийн урт дээд тал нь 50 байна."]
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
      }
})

module.exports = mongoose.model("ProductDetail", ProductDetailSchema);
