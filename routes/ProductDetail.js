const express = require ("express");
const router = express.Router();
const {
    getProductDetails,
    getProductDetail,
    createProductDetail,
    updateProductDetail,
    deleteProductDetail,
} = require ("../controller/ProductDetail");

//api/productdetail
router.route("/").get(getProductDetails).post(createProductDetail);
router
    .route("/:id")
    .get(getProductDetail)
    .put(updateProductDetail)
    .delete(deleteProductDetail)
module.exports = router;
