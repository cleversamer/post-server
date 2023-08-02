const nodemailer = require("nodemailer");
const { mail } = require("../../config/system");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  secure: true,
  auth: {
    user: mail.auth.user,
    pass: mail.auth.password,
  },
});

module.exports.sendNewWebsiteVisit = async (
  email,
  visitor,
  os,
  browserName,
  ua
) => {
  try {
    const {
      subject,
      emailBody: { title },
    } = mail.types.newWebsiteVisit;

    const html = title(visitor, os, browserName, ua);

    const message = mail.getMessage(email, html, subject);

    await transporter.sendMail(message);

    return true;
  } catch (err) {
    throw err;
  }
};
