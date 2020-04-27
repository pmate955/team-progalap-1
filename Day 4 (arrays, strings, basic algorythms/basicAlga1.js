// Összegzés tétel
const sumArray = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
};

const sumArrayFor = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log('Sum:', sumArray([1, 2, 3, 4]));

// Megszámlálás
const countElement = (arr, element) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
};

console.log('Count 1:', countElement([1, 2, 1, 3, 1], 1));

// Maximum
const maxArr = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('Max', maxArr([300, -5, 2, 10, 20, -2]));
