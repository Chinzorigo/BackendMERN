const ProductDetail = require("../models/ProductDetail");

exports.getProductDetails = async (res) => {
    try {
        const productDetails = await ProductDetail.find();

        return res.status(200).json({
            sucess: true,
            data: productDetails
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};

exports.getProductDetail = async (req, res) => {
    try {
        const productDetail = await ProductDetail.findById(req.params.id);

        if (!productDetail) throw new Error(`${req.params.id} ID-тай бүтээгдэхүүний дэлгэрэнгүй олдсонгүй`);

        return res.status(200).json({
            success: true,
            data: productDetail
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};

exports.createProductDetail = async (req, res) =>{
    console.log("data: ", req.body);

    try {
        const productDetail = await ProductDetail.create(req.body);
        return res.status(200).json({
            success: true,
            data: productDetail
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};
exports.updateProductDetail = async (req, res) => {
    try {
        const productDetail = await ProductDetail.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!productDetail) throw new Error(`${req.params.id} ID-тай бүтээгдэхүүний дэлгэрэнгүй олдсонгүй`);
        
        return res.status(200).json({
            success: true,
            data: productDetail
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};

exports.deleteProductDetail = async (req, res) => {
    try {
        const productDetail = await ProductDetail.findByIdAndDelete(req.params.id);

        if (!productDetail) throw new Error(`${req.params.id} ID-тай бүтээгдэхүүний дэлгэрэнгүй олдсонгүй`);

        return res.status(200).json({
            success: true, 
            data: productDetail 
        });

    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message || err
        });
    }
};

