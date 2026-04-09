export const formatDecimal = (value) => {
  const number = Number(value);

  if (isNaN(value)) return 0;

  if (Number.isInteger(value)) {
    return number;
  }

  return number.toFixed(2);
};

export const formatString = (text) => {
  if (!text || !text.includes("/")) return text;

  const [firstPart, ...rest] = text.split("/");
  const restOfText = rest.join("/");

  const number = Number(firstPart);

  if (isNaN(number)) return text;

  const formattedNumber = Number.isInteger(number) ? number : number.toFixed(2);

  return `${formattedNumber}/${restOfText}`;
};

export const formatPrice = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const parseArrayParam = (param) => {
  if (!param) return [];
  return param.split(",").filter(Boolean);
};
