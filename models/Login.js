const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,"Мэйл хаяг оруулна уу."],
        unique: true,
        maxlenght: [50, "Мэйл хаягийн урт дээд тал нь 50 тэмдэгт байна."]
    },
    username: {
        type: String,
        required: [true,"Мэйл хаяг оруулна уу."],
        unique: true,
        maxlenght: [50, "Мэйл хаягийн урт дээд тал нь 50 тэмдэгт байна."]
    },
    password: {
        type: String,
        required: [true, "Нууц үг оруулна уу."],
        maxlenght: [50, "Нууц үгийн урт дээд тал нь 50 тэмдэгт байна."]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Login", LoginSchema);