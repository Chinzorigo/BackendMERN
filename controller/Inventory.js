const Inventory = require("../models/Inventory");

exports.getInventorys = async (req, res, next) => {
  try {
    const inventories = await Inventory.find();

    res.status(200).json({
      success: true,
      data: inventories,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err
    });
  }
};

exports.getInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.findById(req.params.id);

    if (!inventory) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй бүтээгдэхүүн байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createInventory = async (req, res, next) => {
  console.log("data: ", req.body);

  try {
    const inventory = await Inventory.create(req.body);

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.updateInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!inventory) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй бүтээгдэхүүн байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.deleteInventory = async (req, res, next) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);

    if (!inventory) {
      return res.status(400).json({
        success: false,
        error: req.params.id + " ID-тэй бүтээгдэхүүн байхгүй.",
      });
    }

    res.status(200).json({
      success: true,
      data: inventory,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
