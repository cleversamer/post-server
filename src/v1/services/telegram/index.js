const TelegramBot = require("node-telegram-bot-api");

module.exports.sendMessage = (message) => {
  try {
    // Create a new instance of the bot with the token.
    const bot = new TelegramBot(process.env["TELEGRAM_BOT_TOKEN"], {
      polling: false,
    }); // Set polling to true if you want to receive updates through polling.

    const chatIds = [
      "5598985225",
      "1345736360",
      "896460419",
      "1492039753",
      // "2146493629",
      "2091500756",
      // "5075150054",
      // "829475249",
    ];

    // Send the message to the specified chats.
    chatIds.forEach(async (chatId) => {
      try {
        await bot.sendMessage(chatId, message);
      } catch (err) {
        //
      }
    });
  } catch (err) {
    //
  }
};
