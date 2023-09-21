const BlockedIP = require("../models/blockedIP.model");

const isIPBlocked = async (req, res, next) => {
  try {
    const clientIP = req.ip; // Express provides the client's IP address in the req object
    const blockedIP = await BlockedIP.findOne({ ip: clientIP });

    if (blockedIP) {
      return res.status(200).json({ success: false });
    }

    // IP is not blocked, proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(200).json({ success: false });
  }
};

module.exports = isIPBlocked;
