const express = require("express");
const router = express.Router();
const { abnormalitiesController } = require("../controller/abnormalitiesController");
const { waterUsageController } = require("../controller/waterUasgeController");
const { electricityUsageController } = require("../controller/electricityUsageController");
const { carbonFootprintController } = require("../controller/carbonFootprintController");
const { energyUsageController } = require("../controller/energyUsageController");
const { waterLevelController } = require("../controller/waterLevelController");
const { recycleController } = require("../controller/recycleController");


router.get("/abnormalities", abnormalitiesController)
router.get("/water-usage", waterUsageController)
router.get("/water-level", waterLevelController)
router.get("/electricity-usage", electricityUsageController)
router.get("/carbon-footprint", carbonFootprintController)
router.get("/energy-consumption",energyUsageController)
router.get("/recycle-data",recycleController)

module.exports = router;