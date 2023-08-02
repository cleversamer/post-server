const router = require("express").Router();

const routes = [];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
