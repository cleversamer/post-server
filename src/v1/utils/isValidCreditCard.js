const isEven = (number) => {
  return number % 2 === 0;
};

const calculateEven = (even) => {
  return even * 2 < 10 ? even * 2 : even * 2 - 9;
};

const generateCheckSum = (card) => {
  const digits = card.split("").map(Number);
  let sum = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (isEven(digits.length - i)) {
      digit = calculateEven(digit);
    }

    sum += digit;
  }

  return sum % 10;
};

const isValidCreditCard = (cardNumber, cvv, expiryMonth, expiryYear) => {
  try {
    expiryMonth = parseInt(expiryMonth);
    expiryYear = parseInt(expiryYear);
    expiryYear = expiryYear < 100 ? 2000 + expiryYear : expiryYear;

    const cleanedCard = cardNumber.replace(/\s/g, "");

    const isVisaOrMaster = cleanedCard.length === 16;
    const isAmex = cleanedCard.length === 15;

    if (!isAmex && !isVisaOrMaster) {
      return false;
    }

    if (isAmex && cvv.length !== 4) {
      return false;
    }

    if (isVisaOrMaster && cvv.length !== 3) {
      return false;
    }

    if (expiryMonth < 1 || expiryMonth > 12) {
      return false;
    }

    const currentYear = new Date().getFullYear();
    if (expiryYear < currentYear || expiryYear > 2030) {
      return false;
    }

    const checksum = generateCheckSum(cleanedCard);

    return checksum === 0;
  } catch (err) {
    return false;
  }
};

module.exports = isValidCreditCard;
