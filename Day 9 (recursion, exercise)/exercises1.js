const readLine = require('readline-sync');

const avgArray = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  const avg = sum / arr.length;
  return avg;
};

const negCount = (arr) => {
  let neg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      neg++;
    }
  }
  return neg;
};

const posMinNegMax = (arr) => {
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (arr[i] > max) {
        max = arr[i];
      }
    } else {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  return {
    negMax: max,
    posMin: min
  };
};

// const zeroCounter = (arr) => {
//   let zeroCount = 0;
//   for (const element of arr) {
//     if (element === 0) {
//       zeroCount++;
//     }
//   }
//   return zeroCount;
// };

const zeroCounter = (num) => {
  const numString = num + '';
  let zeroCount = 0;
  for (const element of numString) {
    if (element === '0') {
      zeroCount++;
    }
  }
  return zeroCount;
};

const aToB = (a, b) => {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      process.stdout.write(i + ', ');
    }
  } else {
    for (let i = a; i >= b; i--) {
      process.stdout.write(i + ', ');
    }
  }
  console.log();
};
console.log(Number.MIN_VALUE, Number.NEGATIVE_INFINITY, Number.MIN_SAFE_INTEGER);

const testArray = [2, -3, 4, -2, 0, 0];
console.log('AVG', avgArray(testArray));
console.log('NegCount', negCount(testArray));
console.log('MinMax', posMinNegMax(testArray));
// const num = readLine.questionInt('Type a number ');
// console.log('Zero count', zeroCounter(num));
const a = readLine.questionInt('A: ');
const b = readLine.questionInt('B: ');
aToB(a, b);
