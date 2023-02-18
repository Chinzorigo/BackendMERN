const mongoose = require("mongoose");
const Schema = mongoose.Schema

const InventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Барааны нэр оруулна уу"],
    unique: false,
    maxlength: [13, "Барааны урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  price: {
    type: Number,
    required: [true, "Барааны үнэ оруулна уу"],
    unique: false,
    max: [1000000000000, "Барааны үнэ дээд тал нь 1000000000000 төгрөг байх ёстой. таны оруулсан дүн {VALUE}}"],
  },
  category: {
    // type: Schema.Types.ObjectId,
    // ref: 'Category',
    type: String,
    required: [true, "Барааны ангилал оруулна уу"],
    unique: false,
    maxlength: [5, "Барааны ангиллын урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  description: {
    type: String,
    required: [true, "Барааны тайлбар оруулна уу"],
    unique: false,
    maxlength: [150, "Барааны тайлбар дээд тал нь 150 тэмдэгт байх ёстой."],
  },
  image: {
    type: String,
    required: [true, "Барааны зурагны холбоос оруулна уу"],
    unique: false,
    maxlength: [150, "Барааны зурагны холбоос дээд тал нь 150 тэмдэгт байх ёстой."],
  },
  stock: {
    type: Number,
    required: [true, "Барааны үлдэгдэл оруулна уу"],
    unique: false,
    max: [100000000, "Барааны үлдэгдлийн урт дээд тал нь 100000000 ширхэг байх ёстой. Таны оруулсан дүн {VALUE}"],
  },
/*   reviews: {
    type: String,
    required: [true, "Хэрэглэгчийн хаяг оруулна уу"],
    unique: true,
    maxlength: [150, "Хэрэглэгчийн хаягийн урт дээд тал нь 150 тэмдэгт байх ёстой."],
  }, */
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Inventory", InventorySchema);
