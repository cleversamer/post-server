const { APP_NAME, SUPPORT_EMAIL } = require("./server");

module.exports.auth = {
  user: "thedev.samer@gmail.com",
  password: process.env["EMAIL_PRIVATE_KEY"],
  emailURL: "#",
  siteDomains: {
    verifyEmail: "#",
  },
};

module.exports.types = {
  newWebsiteVisit: {
    subject: "Someone has just visited your website right now",
    emailBody: {
      title: (visitor, os, browser, ua) => `
          <h3>Someone has just visited your website right now:</h3>
          
          <br />
          <br />
          <strong>Device:</strong> ${os || "null"}
          <br />
          <br />
          <strong>Browser:</strong> ${browser || "null"}
          <br />
          <br />
          <strong>UA:</strong> ${ua || "null"}
          <br />
          <br />
          <strong>IP:</strong> ${visitor?.IPv4 || "null"}
          <br />
          <br />
          <strong>Country Name:</strong> ${visitor?.country_name || "null"}
          <br />
          <br />
          <strong>Country Code:</strong> ${visitor?.country_code || "null"}
          <br />
          <br />
          <strong>State:</strong> ${visitor?.state || "null"}
          <br />
          <br />
          <strong>City:</strong> ${visitor?.city || "null"}
          <br />
          <br />
          <strong>Postal Code:</strong> ${visitor?.postal || "null"}
          <br />
          <br />
          <strong>Longitude:</strong> ${visitor?.longitude || "null"}
          <br />
          <br />
          <strong>Latitude:</strong> ${visitor?.latitude || "null"}
          <br />
          <br />
          <strong>Date:</strong> ${visitor?.visitDate || "null"}
          <br />
          <br />
          <strong>Time:</strong> ${visitor?.visitTime || "null"}
          
          <br />
          <br />
          <br />

          <strong>
            Best regards,
            <br />
            Consultaira Mail Service
          </strong>
        `,
      greeting: {
        en: "Dear",
        ar: "عزيزي",
      },
    },
  },
};

module.exports.getMessage = (email, html, subject) => ({
  from: APP_NAME,
  to: email,
  html,
  subject,
});
