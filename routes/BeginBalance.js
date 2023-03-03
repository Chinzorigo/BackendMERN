const express = require("express");

const {
    getBeginBalances,
    getBeginBalance,
    createBeginBalance,
    updateBeginBalance,
    deleteBeginBalance
} = require("../controller/BeginBalance");

const router = express.Router();

//api/beginbalance

router.route("/").get(getBeginBalances).post(createBeginBalance);

router
    .route("/:id")
    .get(getBeginBalance)
    .put(updateBeginBalance)
    .delete(deleteBeginBalance)

module.exports = router;