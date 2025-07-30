function toPersianNumber(number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return Number(number)
    .toLocaleString()
    .toString()
    .replace(/\d/g, (d) => persianDigits[d]);
}

export default toPersianNumber;
