'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  const D = b ** 2 - 4 * a * c;
  if (D == 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    const Dsqrt = D ** 0.5;
    arr.push((-b + Dsqrt) / (2 * a), (-b - Dsqrt) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = percent / 100 / 12;
  const S = amount - contribution;
  const pay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  const totalPay = pay * countMonths;
  return parseFloat(totalPay.toFixed(2));
}
