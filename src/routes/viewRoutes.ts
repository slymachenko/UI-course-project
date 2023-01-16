const express = require("express");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/auth", viewController.getAuthForm);
router.get("/package_history", viewController.getPackageHistory);
router.get("/personal_info", viewController.getPersonalInfo);
router.get("/prices", viewController.getPrices);
router.get("/shipment", viewController.getShipment);

export = router;
