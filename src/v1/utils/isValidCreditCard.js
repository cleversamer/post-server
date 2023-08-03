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

const isValidCreditCard = (cardNumber, cvv, expiry) => {
  try {
    const cleanedCard = cardNumber.replace(/\s/g, "");
    const checksum = generateCheckSum(cleanedCard);

    const isVisaOrMaster = checksum === 0 && cleanedCard.length === 16;
    const isAmex = checksum === 0 && cleanedCard.length === 15;
    if (!isAmex && !isVisaOrMaster) {
      return false;
    }

    if (isAmex && cvv.length !== 4) {
      return false;
    }

    if (isVisaOrMaster && cvv.length !== 3) {
      return false;
    }

    const currentYear = new Date().getFullYear() - 2000;
    const currentMonth = new Date().getMonth();
    const isValidExpiry = /^(\d{1,2}\/\d{0,2})?$/.test(expiry);
    if (isValidExpiry) {
      const expiryArray = expiry.split("/");
      const expiryMonth = parseInt(expiryArray[0]);
      const expiryYear = parseInt(expiryArray[1]);
      const isValidExpiryMonth =
        expiryYear === currentYear
          ? expiryMonth >= currentMonth
          : expiryMonth >= 1 && expiryMonth <= 12;
      const isValidExpiryYear =
        expiryYear >= currentYear && expiryYear <= currentYear + 8;

      if (!isValidExpiryMonth || !isValidExpiryYear) {
        return false;
      }
    } else {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
};

module.exports = isValidCreditCard;
