const Login = require("../models/Login");

exports.getLogins = async (req, res, next) => {
    try {
        const logins = await Login.find();

        res.status(200).json({
            success: true,
            data: logins
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err
        });
    }
};

exports.getLogin = async (req, res, next) => {
    try {
        const login = await Login.findById(req.params.id);

        if(!login) {
            return res.status(400).json({
                success: false,
                error: req.params.id + "ID-тай хэрэглэгч олдсонгүй."
            });
        }

        res.status(200).json({
            success: true,
            data: login
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err
        });
    }
};

exports.createLogin = async(req, res, next) => {
    console.log("data: ",req.body);

    try {
        const login = await Login.create(req.body);

        res.status(200).json({
            success: true,
            data: login,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err,
        });
    }
};

exports.updateLogin = async (req, res, nex) => {
    try {
        const login = await Login.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidator: true
        });
        
        if (!login) {
            return res.status(400).json({
                success: false,
                error: req.params.id + "ID-тай хэрэглэгч олдсонгүй."
            });
        }
        res.status(200).json({
            success: true,
            data: login
        });
    } catch (err) {
        res.status(400).json({
            success:false,
            error:err
        });
    }
};

exports.deleteLogin = async (req, res, next) => {
    try {
        const login = await Login.findByIdAndDelete(req.params.id);

        if (!login) {
            return res.status(400).json({
                success: false,
                error: req.params.id + "ID - тай хэрэглэгч олдсонгүй"
            })
        }

        res.status(200).json({
            success: true,
            data: login
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err
        });
    }
};