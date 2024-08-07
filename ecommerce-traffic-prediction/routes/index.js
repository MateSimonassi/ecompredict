const express = require("express");
const router = express.Router();
const trafficController = require("../controllers/trafficController");

router.get("/traffic", trafficController.getTrafficData);
router.post("/traffic", trafficController.addTrafficData);

module.exports = router;

