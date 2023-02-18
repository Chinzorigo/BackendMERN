const express = require("express");

const {
  getPromotions,
  getPromotion,
  createPromotion,
  updatePromotion,
  deletePromotion,
} = require("../controller/Promotion");

const router = express.Router();

//api/promotion
router.route("/").get(getPromotions).post(createPromotion);

router
  .route("/:id")
  .get(getPromotion)
  .put(updatePromotion)
  .delete(deletePromotion);

module.exports = router;
