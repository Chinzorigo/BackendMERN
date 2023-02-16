const express = require("express");

const {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require ("../controller/Category");

const router = express.Router();

//api/category
router.route("/").get(getCategories).post(createCategory);

router
    .route("/:id")
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory)

module.exports = router;