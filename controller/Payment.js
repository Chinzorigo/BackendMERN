const Payment = require("../models/Payment");

exports.getPayments = async ( req, res) => {
    try {
        const payments = await Payment.find();

        return res.status(200).json({
            success: true,
            data: payments
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
}

exports.getPayment = async ( req, res ) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) throw new Error(`${req.params.id} ID-тай payment олдсонгүй.`);

        return res.status(200).json({
            success: true,
            data: payment
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};

exports.createPayment = async ( req, res) => {
    
    try {
        const payment = await Payment.create(req.body);

        return res.status(200).json ({
            success: true,
            data: payment
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
};
exports.updatePayment = async( req, res) => {
    try {
        const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!payment) throw new Error(`${req.params.id} ID-тай payment олдсонгүй`);

        return res.status(200).json({
            success: true,
            data: payment
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};


exports.deletePayment = async ( req, res ) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);

        if (!payment) throw new Error(`${res.params.id} ID-тай payment байхгүй.`);

        return res.status(200).json({
            success: true,
            data: payment
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}