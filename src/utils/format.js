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
