// maxLength feladat
const maxLength = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxLength(['a', 'abc', 'asdfds', 'abcicakuty']));

// firstString
const firstString = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].toLowerCase() < min.toLowerCase()) {
      min = arr[i];
    }
  }
  return min;
};

console.log(firstString(['Zsalma', 'barack', 'kukac']));

// addSub
const addSub = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      sum += arr[i];
    } else {
      sum -= arr[i];
    }
  }
  return sum;
};

console.log('Add', addSub([1, 2, 3, 4]));

// ArrayAnd
const arrayAnd = (arr) => {
  let out = true;
  for (const element of arr) {
    out = out && element;
  }
  return out;
};

console.log('AND', arrayAnd([true, false, false]));

// Increasing
const isIncreasing = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i], arr[i + 1]);
    // console.log(typeof arr[i + 1]);
    // if (typeof arr[i + 1] === 'undefined') { // VAGY if(!arr[i+1]) {}
    // }
    if (arr[i] > arr[i + 1]) { // arr[i] <= arr[i+1]
      return false;
    }
  }
  return true;
};

console.log('ISincreasing', isIncreasing([1, 2, 2, 3, 4]));

// replaceDigits

const replaceDigits = (str) => {
  let out = '';
  for (const ch of str) {
    switch (ch) {
      case '1': out += 'One'; break;
      case '2': out += 'Two'; break;
      case '3': out += 'Three'; break;
      default: out += ch;
    }
  }
  return out;
};

console.log('REPLACE', replaceDigits('abc123'));

// createStr

const createStr = (size) => {
  return 'abcdefghijklmnopqrstuvwxyz'.substring(0, size);
};

console.log('ABC', createStr(26));
