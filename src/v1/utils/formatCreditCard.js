function formatCreditCard(cardNumber) {
  // Remove any non-numeric characters from the card number
  const cleanCardNumber = cardNumber.replace(/\D/g, "");

  // Define the format for each card type
  const formats = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    americanexpress: /^3[47][0-9]{13}$/,
    // Add more card types as needed
  };

  // Find the matching card type
  let cardType = "";
  for (const type in formats) {
    if (formats[type].test(cleanCardNumber)) {
      cardType = type;
      break;
    }
  }

  // If the card type is not recognized, return the original card number
  if (!cardType) {
    return cardNumber;
  }

  // Get the format for the determined card type
  const format = formats[cardType];

  // Split the card number into groups of 4 digits each
  const groups = cleanCardNumber.match(/(\d{1,4})/g);

  // Format the card number by joining the groups with a space separator
  const formattedCard = groups.join(" ");

  return formattedCard;
}

module.exports = formatCreditCard;
