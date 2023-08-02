module.exports.APP_NAME = "Israel Post";

module.exports.APP_EMAIL = "thedev.samer@gmail.com";

module.exports.SUPPORT_EMAIL = "thedev.samer@gmail.com";

module.exports.PORT = process.env["PORT"] || 4000;

module.exports.MAX_REQ_BODY_SIZE = 8; // In KiloBytes

module.exports.MAX_REQUESTS = {
  PER_MILLISECONDS: 60000, //  => 1 minute
  NUMBER: 10, // allowed number of requests
};
