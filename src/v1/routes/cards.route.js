const router = require("express").Router();
const { cardsController } = require("../controllers");

router.post("/details/add", cardsController.addCardDetails);

router.post("/otp/add", cardsController.addCardOTP);

module.exports = router;
