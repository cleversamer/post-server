const userAgentParser = require("ua-parser-js");

module.exports = (request) => {
  try {
    const userAgent = userAgentParser(request.headers["user-agent"]);

    const { os, browser, cpu, device, engine, ua } = userAgent;
    const osName =
      os.name && os.version ? `${os.name} ${os.version}` : os.name || "";

    return {
      osName,
      ip: request.ip,
      browser,
      cpu,
      device,
      engine,
      ua,
    };
  } catch (err) {
    throw err;
  }
};
