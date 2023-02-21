const express = require("express");
const {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
} = require ("../controller/Order");
const router = express.Router();

//api/order
router.route("/").get(getOrders).post(createOrder);
router
    .route("/:id")
    .get(getOrder)
    .put(updateOrder)
    .delete(deleteOrder)
module.exports = router;