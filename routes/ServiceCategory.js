const express = require("express");
const router = express.Router();
const serviceCategoryController = require("../controller/ServiceCategory");

router.route("/").get(serviceCategoryController.getServiceCategories).post(serviceCategoryController.createServiceCategory);

router
    .route("/:id")
    .get(serviceCategoryController.getServiceCategory)
    .put(serviceCategoryController.updateServiceCategory)
    .delete(serviceCategoryController.deleteServiceCategory)

module.exports = router;