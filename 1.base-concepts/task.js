'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant == 0) {
    arr.push(-b / (2 * a));
  } else if (discriminant > 0) {
    const discriminantSqrt = discriminant ** 0.5;
    arr.push(
        (-b + discriminantSqrt) / (2 * a), (-b - discriminantSqrt) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const convertedPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  const pay = loanBody *
      (convertedPercent +
       (convertedPercent / (((1 + convertedPercent) ** countMonths) - 1)));
  const totalPay = pay * countMonths;
  return parseFloat(totalPay.toFixed(2));
}
