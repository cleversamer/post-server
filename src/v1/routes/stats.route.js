const router = require("express").Router();
const { statsController } = require("../controllers");

router.post("/record", statsController.recordVisit);

module.exports = router;
