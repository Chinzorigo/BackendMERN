const Shipment = require("../models/Shipment");

exports.getShipments = async ( req, res ) => {
    
    try {
        const shipments = await Shipment.find();
        return res.status(200).json({
            success: true,
            data: shipments
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.getShipment = async ( req, res ) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        if(!shipment) throw new Error(`${req.params.id} ID-тай хүрэлтийн хаяг байгүй`);
        
        return res.status(200).json({
            success: true,
            data: shipment
        })
    } catch (err) {
        return res.status(400).json({
            success: true,
            error: err.message || err
        })
    }
}

exports.createShipment = async ( req, res ) => {
    try {
        const shipment = await Shipment.create(req.body);
        return res.status(200).json({
            success: true,
            data: shipment
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.updateShipment = async ( req, res ) => {
    try {
        const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!shipment) throw new Error(`${req.params.id} ID-тай хүргэлтийн хаяг байхгүй.`);

        return res.status(200).json({
            success: true,
            data: shipment
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.deleteShipment = async ( req ,res ) => {
    try {
        const shipment = await Shipment.findByIdAndDelete(req.params.id);
        if(!shipment) throw new Error(`${req.params.id} ID-тай хүргэлтийн хаяг байхгүй`);

        return res.status(200).json({
            success: true,
            data: shipment
        })
    } catch (err) {
        return res.status(200).json({
            success: true,
            error: err.message || err
        })
    }
}