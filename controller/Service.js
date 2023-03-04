const Service = require("../models/Service");

exports.getServices = async ( req, res ) => {
    try {
        const services = await Service.find();
        return res.status(200).json({
            getSuccess: true,
            data: services
        })
    } catch (err) {
        return res.status(400).json({
            getSuccess: false,
            error: err.message || err
        })
    }
}

exports.getService = async ( req, res ) => {
    try {
        const service = await Service.findById(req.params.id);
        if(!service) throw new Error(`${req.params.id} ID-тай сервис байхгүй.`);

        return res.status(200).json({
            getSuccess: true,
            data: service
        })
    } catch (err) {
        return res.status(200).json({
            getSuccess: false,
            error: err.message || err
        })
    }
}

exports.createService = async ( req, res ) => {
    try {
        const service = await Service.create(req.body);
        return res.status(200).json({
            createSuccess: true,
            data: service
        })
    } catch (err) {
        return res.status(400).json({
            createSuccess: false,
            error: err.message || err
        })
    }
}

exports.updateService = async ( req, res ) => {
    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!service) throw new Error(`${req.params.id} ID-тай сервис байхгүй.`);
        return res.status(200).json({
            updateSuccess: true,
            data: service
        })
    } catch (err) {
        return res.status(400).json({
            updateSuccess: true,
            error: err.message || err
        })
    }
}

exports.deleteService = async ( req, res ) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if(!service) throw new Error(`${req.params.id} ID-тай сервис байхгүй.`)
        return res.status(200).json({
            deleteSuccess: true,
            data: service
        })
    } catch (err) {
        return res.status(400).json({
            deleteSuccess: false,
            error: err.message || err
        })
    }
}

