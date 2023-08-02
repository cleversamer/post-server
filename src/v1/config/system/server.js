module.exports.APP_NAME = "Israel Post";

module.exports.APP_EMAIL = "thedev.samer@gmail.com";

module.exports.SUPPORT_EMAIL = "thedev.samer@gmail.com";

module.exports.PORT = process.env["PORT"] || 4000;

module.exports.MAX_REQ_BODY_SIZE = 8; // In KiloBytes

module.exports.MAX_REQUESTS = {
  PER_MILLISECONDS: 1 * 60 * 1000, //  => 1 minute
  NUMBER: 60 * 256, // allowed number of requests
};
