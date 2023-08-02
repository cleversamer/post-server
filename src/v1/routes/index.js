const router = require("express").Router();
const cardsRoute = require("./cards.route");

router.use("/cards", cardsRoute);

module.exports = router;
