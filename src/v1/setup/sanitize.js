const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
// const { rateLimit } = require("express-rate-limit");
const { server } = require("../config/system");
// const errors = require("../config/errors");
// const httpStatus = require("http-status");
// const checkCountry = require("../middleware/checkCountry");
// const isIPBlocked = require("../middleware/isIPBlocked");

// The following configuration will limit the number of requests
// for each IP address per a certain amount of time.
// const limiter = rateLimit({
//   windowMs: server.MAX_REQUESTS.PER_MILLISECONDS,
//   max: server.MAX_REQUESTS.NUMBER,
//   message: {
//     status: "error",
//     statusCode: httpStatus.TOO_MANY_REQUESTS,
//     message: errors.system.tempBlocked,
//   },
// });

module.exports = (app) => {
  // app.use(checkCountry);
  // app.use(isIPBlocked);
  // app.use(limiter);
  app.use(express.json({ limit: `${server.MAX_REQ_BODY_SIZE}kb` }));
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(xss());
};
