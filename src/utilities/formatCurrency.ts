const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "BRL",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
