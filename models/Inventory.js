const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Хэрэглэгчийн овог оруулна уу"],
    unique: false,
    maxlength: [50, "Хэрэглэгчийн овгийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  price: {
    type: Number,
    required: [true, "Хэрэглэгчийн овог оруулна уу"],
    unique: false,
    maxlength: [50, "Хэрэглэгчийн овгийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, "Хэрэглэгчийн мэйл хаяг оруулна уу"],
    unique: true,
    maxlength: [50, "Хэрэглэгчийн мэйл хаягийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  description: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрийг оруулна уу"],
    unique: true,
    maxlength: [8, "Хэрэглэгчийн утасны урт дээд тал нь 8 тэмдэгт байх ёстой."],
  },
  image: {
    type: String,
    required: [true, "Хэрэглэгчийн хүйс оруулна уу"],
    unique: true,
    maxlength: [6, "Хэрэглэгчийн хүйс урт дээд тал нь 6 тэмдэгт байх ёстой."],
  },
  stock: {
    type: Number,
    required: [true, "Хэрэглэгчийн хаяг оруулна уу"],
    unique: true,
    maxlength: [150, "Хэрэглэгчийн хаягийн урт дээд тал нь 150 тэмдэгт байх ёстой."],
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

module.exports = mongoose.model("Inventory", UserSchema);
