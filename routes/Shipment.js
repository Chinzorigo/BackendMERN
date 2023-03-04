const express = require("express");
const router = express.Router();

const {
    getShipments,
    getShipment,
    createShipment,
    updateShipment,
    deleteShipment
} = require("../controller/Shipment");

//api/shipment
router.route("/").get(getShipments).post(createShipment);

router
    .route("/:id")
    .get(getShipment)
    .put(updateShipment)
    .delete(deleteShipment)

module.exports = router;