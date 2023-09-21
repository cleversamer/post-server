const geoip = require("geoip-lite");

const checkCountry = (req, res, next) => {
  try {
    const clientIP = req.ip; // Express provides the client's IP address in the req object

    // Get the country information based on the client's IP address
    const geo = geoip.lookup(clientIP);

    // Extract the country code from the geo information
    const country = geo ? geo.country : null;

    // Now you can perform your logic based on the client's country
    // For example, you can check if it's a specific country and set a flag or perform some other action
    if (!["IL"].includes(country) && country !== null) {
      return res.status(200).json({ success: false });
    }

    // Continue with the next middleware or route handler
    next();
  } catch (err) {
    res.status(200).json({ success: false });
  }
};

module.exports = checkCountry;
