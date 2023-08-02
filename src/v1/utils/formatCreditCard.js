// Function to format the credit card number based on the card type
module.exports = function formatCreditCard(cardNumber) {
  // Remove any non-numeric characters from the card number
  const cleanCardNumber = cardNumber.replace(/\D/g, "");

  // Define the regex patterns for each card type
  const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    americanexpress: /^3[47][0-9]{13}$/,
    // Add more card types as needed
  };

  // Find the matching card type
  let cardType = "";
  for (const type in cardPatterns) {
    if (cardPatterns[type].test(cleanCardNumber)) {
      cardType = type;
      break;
    }
  }

  // If the card type is not recognized, return the original card number
  if (!cardType) {
    return cardNumber;
  }

  // Get the format for the determined card type
  const format = cardPatterns[cardType];

  // Format the card number based on the card type format
  let formattedCard = "";
  let j = 0;
  for (let i = 0; i < format.length; i++) {
    const currentChar = format[i];
    if (currentChar === "X") {
      formattedCard += cleanCardNumber[j];
      j++;
    } else {
      formattedCard += currentChar;
    }
  }

  return formattedCard;
};
