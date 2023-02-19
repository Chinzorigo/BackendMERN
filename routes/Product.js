const express = require("express");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/Product");

const router = express.Router();

//api/users
router.route("/").get(getProducts).post(createProduct);

router
  .route("/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
