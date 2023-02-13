const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Хэрэглэгчийн овог оруулна уу"],
    // unique: false,
    maxlength: [50, "Хэрэглэгчийн овгийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  lastName: {
    type: String,
    required: [true, "Хэрэглэгчийн овог оруулна уу"],
    // unique: false,
    maxlength: [50, "Хэрэглэгчийн овгийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  email: {
    type: String,
    required: [true, "Хэрэглэгчийн мэйл хаяг оруулна уу"],
    unique: true,
    maxlength: [50, "Хэрэглэгчийн мэйл хаягийн урт дээд тал нь 50 тэмдэгт байх ёстой."],
  },
  phone: {
    type: Number,
    required: [true, "Хэрэглэгчийн нэрийг оруулна уу"],
    unique: true,
    maxlength: [8, "Хэрэглэгчийн утасны урт дээд тал нь 8 тэмдэгт байх ёстой."],
  },
  gender: {
    type: String,
    required: [true, "Хэрэглэгчийн хүйс оруулна уу"],
    // unique: false,
    maxlength: [6, "Хэрэглэгчийн хүйс урт дээд тал нь 6 тэмдэгт байх ёстой."],
  },
  address: {
    type: String,
    required: [true, "Хэрэглэгчийн хаяг оруулна уу"],
    // unique: false,
    maxlength: [150, "Хэрэглэгчийн хаягийн урт дээд тал нь 150 тэмдэгт байх ёстой."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
