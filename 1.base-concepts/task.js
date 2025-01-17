'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let D = b ** 2 - 4 * a * c;
  if (D == 0) {
    arr.push(-b / (2 * a));
  } else if (D > 0) {
    let Dsqrt = D ** 0.5;
    arr.push((-b + Dsqrt) / (2 * a), (-b - Dsqrt) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {}