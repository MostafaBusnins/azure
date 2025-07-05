const express = require("express");
const {
  sendReadsSensorsController,
} = require("../controllers/sensors-reads.controller");
const { createFcmToken } = require("../controllers/notifications");

const router = express.Router();

router.get("/sensors-reads", sendReadsSensorsController);

router.post("/fcm-token", createFcmToken);
module.exports = router;
