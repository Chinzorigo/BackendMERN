const express = require("express");
const {
    getPayments,
    getPayment,
    createPayment,
    updatePayment,
    deletePayment,
} = require("../controller/Payment");

const router = express.Router();

//api/payment
router.route("/").get(getPayments).post(createPayment);
router
    .route("/:id")
    .get(getPayment)
    .put(updatePayment)
    .delete(deletePayment)

module.exports = router;