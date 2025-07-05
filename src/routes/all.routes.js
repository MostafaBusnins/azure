import express from "express";
import { sendReadsSensorsController } from "../controllers/sensors-reads.controller.js";
import { createFcmToken } from "../controllers/notifications/index.js";

const router = express.Router();

router.get("/sensors-reads", sendReadsSensorsController);

router.post("/fcm-token", createFcmToken);

export default router;
