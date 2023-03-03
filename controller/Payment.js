const Payment = require("../model/Product");

exports.getPayments = async ( req, res) => {
    try {
        const payment = await Payment.find();

        return res.status(200).json({
            success: true,
            data: payment
        });
    } catch (err) {
        return res(400).json({
            success: false,
            error: err.message || err
        });
    }
}

exports.getPayment = async ( req, res ) => {
    try {
        const payment = await Payment.findById(req.param.id);
        if (!payment) throw new Error(`${req.param.id} ID-тай payment олдсонгүй.`);

        return res(200).json({
            success: true,
            data: payment
        });
    } catch (err) {
        return res(400).json({
            success: false,
            error: err.message || err
        });
    }
};

exports.createPayment = async ( req, res) => {
    
    try {
        const Payment = await Payment.create(req.body);

        return res(200).json ({
            success: true,
            error: err.message || err
        })
    } catch (err) {
        return status(400).json({
            success: false,
            error: err.message || err
        })
    }
};

exports.deletePayment = async ( res, res ) => {
    try {
        const payment = Payment.findByIdAndDelete(req.params.id)

        if (!payment) throw new Error(`${res.params.id} ID-тай payment байхгүй.`);

        return res(200).json({
            success: true,
            data: payment
        })
    } catch (err) {
        return res(400).json({
            success: false,
            error: err.message || err
        })
    }
}