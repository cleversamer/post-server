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

module.exports.sendWelcomingEmail = async (lang, email, name) => {
  try {
    if (!["ar", "en"].includes(lang)) {
      lang = "en";
    }

    const {
      subject,
      emailBody: { title },
    } = mail.types.welcoming;

    const html = title[lang](name);

    const message = mail.getMessage(lang, email, html, subject[lang]);

    await transporter.sendMail(message);
    return true;
  } catch (err) {
    throw err;
  }
};
