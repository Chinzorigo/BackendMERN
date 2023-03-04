const ServiceCategory = require("../models/ServiceCategory");

exports.getServiceCategories = async ( req, res ) => {
    try {
        const serviceCategories = await ServiceCategory.find();
        return res.status(200).json({
            getSuccess: true,
            data: serviceCategories 
        })
    } catch (err) {
        return req.status(400).json({
            getSuccess: false,
            error: err.message || err
        })
    }
}

exports.getServiceCategory = async ( req, res ) => {
    try {
        const serviceCategory = await ServiceCategory.findById(req.params.id);
        if(!serviceCategory) throw new Error(`${req.params.id} ID-тай сервис категори байхгүй.`);
        return res.status(200).json({
            getSuccess: true,
            data: serviceCategory
        })
    } catch (err) {
        return res.status(200).json({
            getSuccess: false,
            error: err.message || err
        })
    }
}

exports.createServiceCategory = async ( req, res ) => {
    try {
        const serviceCategory = await ServiceCategory.create(req.body);
        return res.status(200).json({
            creatSuccess: true,
            data: serviceCategory
        })
    } catch (err) {
        return res.status(400).json({
            creatSuccess: false,
            error: err.message || err
        })
    }
}

exports.updateServiceCategory = async ( req, res ) => {
    try {
        const serviceCategory = await ServiceCategory.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!serviceCategory) throw new Error(`${req.params.id} ID-тай сервис категори байхгүй.`)
        return res.status(200).json({
            updateSuccess: true,
            data: serviceCategory
        })
    } catch (err) {
        return res.status(400).json({
            updateSuccess: false,
            error: err.message || err
        })
    }
}

exports.deleteServiceCategory = async ( req, res ) => {
    try {
        const serviceCategory = await ServiceCategory.findByIdAndDelete(req.params.id);
        if(!serviceCategory) throw new Error(`${req.params.id} ID-тай сервис категори байхгүй.`);
        return res.status(200).json({
            deleteSuccess: true,
            data: serviceCategory
        })
    } catch (err) {
        return res.status(200).json({
            deleteSuccess: false,
            error: err.message || err
        })
    }
}