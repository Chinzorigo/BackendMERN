const express = require("express");
const router = express.Router();

const {
    getUnits,
    getUnit,
    createUnit,
    updateUnit,
    deleteUnit
} = require("../controller/Unit")

router.route("/").get(getUnits).post(createUnit);

router
    .route("/:id")
    .get(getUnit)
    .put(updateUnit)
    .delete(deleteUnit)

module.exports = router;