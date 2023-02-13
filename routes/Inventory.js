const express = require("express");

const {
  getInventory,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controller/Inventory");

const router = express.Router();

//api/users
router.route("/").get(getInventory).post(createInventory);

router
  .route("/:id")
  .get(getInventory)
  .put(updateInventory)
  .delete(deleteInventory);

module.exports = router;
