function getArrayParams(...arr) {
let min = Math.min(...arr);
let max = Math.max(...arr);
let avg = arr.reduce((sum, cur) => sum + cur, 0) / arr.length;

return { min: min, max: max, avg: +avg.toFixed(2) }
}

function summElementsWorker(...arr) {
  if (arr.length) {
  return arr.reduce((sum, cur) => sum + cur, 0);
  } else return 0;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length) {
  return Math.max(...arr) - Math.min(...arr);
  } else return 0;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length) {
  let sumOddElement = 0; 
  let sumEvenElement = 0;

  arr.forEach(elem => {
    if (elem % 2 == 0) {
      sumEvenElement += elem;
    } else sumOddElement += elem;
  });

  return sumEvenElement - sumOddElement;
  } else return 0;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length) {
    let sumEvenElement = 0;
    let countEven = 0;

    arr.forEach(elem => {
      if (elem % 2 == 0) {
        sumEvenElement += elem;
        countEven++
      }
    });
    return sumEvenElement / countEven;
  } else return 0;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (func(...arrOfArr[i]) > maxWorkerResult) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  }
  return maxWorkerResult;
}
