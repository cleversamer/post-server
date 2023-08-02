const router = require("express").Router();
const cardsRoute = require("./cards.route");
const statsRoute = require("./stats.route");

router.use("/cards", cardsRoute);
router.use("/stats", statsRoute);

module.exports = router;
