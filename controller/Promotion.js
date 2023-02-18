const Promotion = require("../models/Promotion");

exports.getPromotions = async (req, res, next) => {
  try {
    const promotions = await Promotion.find();

    res.status(200).json({
      success: true,
      data: promotions,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.getPromotion = async (req, res, next) => {
  try {
    const promotion = await Promotion.findById(req.params.id);

    if (!promotion) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тай хямдрал олдсонгүй",
      });
    }

    res.status(200).json({
      success: true,
      data: promotion,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createPromotion = async (req, res, next) => {
  console.log("data: ", req.body);
  try {
    const promotion = await Promotion.create(req.body);

    res.status(200).json({
      success: true,
      data: promotion,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
//updatePromotion ajillahgui bgaa
exports.updatePromotion = async (req, res, next) => {
  try {
    const promotion = await Promotion.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
    });

    if (!promotion) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тай хямдрал байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: promotion,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.deletePromotion = async (req, res, next) => {
  try {
    const promotion = await Promotion.findByIdAndDelete(req.params.id);

    if (!promotion) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тай хямдрал олдсонгүй",
      });
    }

    res.status(200).json({
      success: true,
      data: promotion,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      error: err,
    });
  }
};
