const express = require("express");
const userController = require("../controllers/userController");
const userValidation = require("../middlewares/userValidation");

const router = express.Router();

router
    .route("/")
    .post(userValidation, userController.createUser)
    .delete(userController.deleteAllUsers);

router.get("/:id", userController.getUser);

module.exports = router;