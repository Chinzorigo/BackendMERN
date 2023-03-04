const express = require("express");
const Unit = require("../models/Unit");

exports.getUnits = async ( req, res ) => {
    try {
        const units = await Unit.find();

        return res.status(200).json({
            success: true,
            data: units
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err            
        })
    }
}

exports.getUnit = async ( req, res ) => {
    try {
        const unit = await Unit.findById(req.params.id);
        if(!unit) throw new Error(`${req.params.id} ID-тай хэмжих нэгж байхгүй`);

        return res.status(200).json({
            success: true,
            data: unit
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.createUnit = async ( req, res ) => {
    try {
        const unit = await Unit.create(req.body);
        return res.status(200).json({
            success: true,
            data: unit
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.updateUnit = async ( req, res ) => {
    try {
        const unit = await Unit.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if(!unit) throw new Error(`${req.params.id} ID-тай хэмжих нэгж байхгүй`);

        return res.status(200).json({
            success: true,
            data: unit
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        })
    }
}

exports.deleteUnit = async ( req, res ) => {
    try {
        const unit = await Unit.findByIdAndDelete(req.params.id);
        if(!unit) throw new Error(`${req.params.id} ID-тай хэмжих нэгж олдсонгүй.`);

        return res.status(200).json({
            success: true,
            data: unit
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            error: err.message || err
        })
    }
}