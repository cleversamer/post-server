const setupSanitization = require("./sanitize");
const routes = require("../routes");
const { server } = require("../config/system");
// const setupMongoDB = require("./db");

module.exports = (app) => {
  // setupMongoDB();
  setupSanitization(app);
  app.use("/api", routes);

  app.listen(server.PORT, "::", () => {
    console.log(`App is listening on port ${server.PORT}`);
  });
};
