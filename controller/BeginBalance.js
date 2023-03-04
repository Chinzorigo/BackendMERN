const BeginBalance = require("../models/BeginBalance");

exports.getBeginBalances = async (req, res) => {
    try {
        const beginBalance = await BeginBalance.find();
        return res.status(200).json({
            success: true,
            data: beginBalance
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.getBeginBalance = async ( req, res ) => {
    try {
        const beginBalance = await BeginBalance.findById(req.params.id);
        if(!beginBalance) throw new Error(`${req.params.id} ID-тай эхлэх баланс байхгүй.`);

        return res.status(200).json({
            success: true,
            data: beginBalance
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.createBeginBalance = async ( req, res ) => {
    try {
        const beginBalance = await BeginBalance.create(req.body);

        return res.status(200).json({
            success: true,
            data: beginBalance
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.updateBeginBalance = async ( req, res ) => {
    try {
        const beginBalance = await BeginBalance.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!beginBalance) throw new Error(`${req.params.id} ID-тай эхлэл баланс байхгүй.`);
        return res.status(200).json({
            success: true,
            data: beginBalance
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.deleteBeginBalance = async ( req, res ) => {
    try {
        const beginBalance = await BeginBalance.findByIdAndDelete(req.params.id);
        if(!beginBalance) throw new Error(`${req.params.id} ID-тай эхлэл баланс байхгүй`);
        
        return res.status(200).json({
            success: true,
            data: beginBalance
        })
    } catch (err) {
        return res.status(400).json({
            status: false,
            error: err.message || err
        })
    }
}