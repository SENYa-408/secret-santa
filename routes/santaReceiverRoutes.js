const express = require("express");
const santaReceiverController = require("../controllers/santaReceiverController");
const santaReceiverValidation = require("../middlewares/santaReceiverValidation");

const router = express.Router();

router
    .route("/")
    .post(santaReceiverValidation, santaReceiverController.createSantaReceiver)
    .delete(santaReceiverController.deleteAllSantaReceivers);

router.get("/:santa_id", santaReceiverController.getSantaReceiver);

module.exports = router;