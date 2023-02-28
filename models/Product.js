const mongoose = require("mongoose");
// const Schema = mongoose.Schema

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Барааны нэр оруулна уу"],
    maxlength: [50, "Барааны урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  description: {
    type: String,
    required: [true, "Барааны тайлбар оруулна уу"],
    maxlength: [150, "Барааны тайлбар дээд тал нь 150 тэмдэгт байх ёстой."],
  },
  price: {
    type: Number,
    required: [true, "Барааны үнэ оруулна уу"],
    max: [1000000000000, "Барааны үнэ дээд тал нь 1000000000000 төгрөг байх ёстой. таны оруулсан дүн {VALUE}}"],
  },
  discountPercentage: {
    type: Number,
    required: true,
    max: [100, "Барааны хямдрал дээд тал нь 100 төгрөг байх ёстой. таны оруулсан дүн {VALUE}}"],
    default: 0
  },
  rating: {
    type: Number,
    required: true,
    max: [5, "Барааны үнэлгээ дээд тал нь 5 байх ёстой. таны оруулсан дүн {VALUE}}"]
  },
  stock: {
    type: Number,
    required: [true, "Барааны үлдэгдэл оруулна уу"],
    max: [100000000, "Барааны үлдэгдлийн урт дээд тал нь 100,000,000 ширхэг байх ёстой. Таны оруулсан дүн {VALUE}"]
  },
  brand: {
    type: String,
    required: true,
    maxlength: [50, "Барааны брэндийн нэр урт дээд тал нь 50 тэмдэгт байх ёстой."]
  },
  category: {
    // type: Schema.Types.ObjectId,
    // ref: 'Category',
    type: String,
    required: [true, "Барааны ангилал оруулна уу"],
    maxlength: [50, "Барааны ангиллын урт дээд тал нь 50 тэмдэгт байх ёстой."]
  },
  thumbnail: {
    type: String,
    required: [true, "Барааны thumbnail холбоос оруулна уу"],

  },
  images: {
    type: [String],
    required: [true, "Барааны зурагны холбоос оруулна уу"],
    maxlength: [150, "Барааны зурагны холбоос дээд тал нь 150 тэмдэгт байх ёстой."]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
