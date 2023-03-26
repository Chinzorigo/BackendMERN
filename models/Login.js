const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

LoginSchema.pre("save", async function() {
    const encrypt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, encrypt);
});

module.exports = mongoose.model("Login", LoginSchema);