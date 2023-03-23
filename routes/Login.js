const express = require("express");

const{
    getLogins,
    getLogin,
    createLogin,
    updateLogin,
    deleteLogin,
    checkLogin
} = require("../controller/Login");

const router = express.Router();

//api/login
router.route("/").get(getLogins).post(createLogin);

router
    .route("/:id")
    .get(getLogin)
    .put(updateLogin)
    .delete(deleteLogin);

// Check if login information is valid
router.route("/check").post(checkLogin);

module.exports = router;
