const express = require("express");

const{
    getLogins,
    getLogin,
    createLogin,
    updateLogin,
    deleteLogin
} = require("../controller/Login");

const router = express.Router();

//api/login
router.route("/").get(getLogins).post(createLogin);

router
    .route("/:id")
    .get(getLogin)
    .put(updateLogin)
    .delete(deleteLogin);

module.exports = router;
