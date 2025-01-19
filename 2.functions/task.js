function getArrayParams(...arr) {
  let min = 0, max = 0, avg = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
  avg =
      arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  avg /= arr.length;
  return {min: min, max: max, avg: Number(avg.toFixed(2))};
}

function summElementsWorker(...arr) {
  return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  arr.forEach(x => (x % 2 == 0) ? sumEvenElement += x : sumOddElement += x);
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  arr.forEach(x => {
    if (x % 2 == 0) {
      sumEvenElement += x;
      ++countEvenElement;
    }
  });
  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork(arrOfArr, func) {
  resultArr = new Array;
  arrOfArr.forEach(arr => resultArr.push(func(...arr)));
  return Math.max(...resultArr);
}

const arr = [
  [10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];
