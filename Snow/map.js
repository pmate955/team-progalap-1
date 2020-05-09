const table = require('table');

const generateMap = (width, height) => {
  const arr = new Array(height);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(width);
  }
  return arr;
};

const fillMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = ' ';
    }
  }
};

const addSnow = (arr, num) => {
  for (let j = 0; j < arr[0].length; j++) {
    arr[0][j] = ' ';
  }
  for (let i = 0; i < num; i++) {
    const j = Math.floor(Math.random() * arr[0].length);
    arr[0][j] = '*';
  }
};

const falling = (arr) => {
  const height = arr.length;
  for (let j = 0; j < arr[0].length; j++) {
    arr[height - 1][j] = ' ';
  }
  for (let i = height - 1; i > 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i - 1][j] === '*') {
        arr[i][j] = '*';
        arr[i - 1][j] = ' ';
      }
    }
  }
};

const printMap = (arr) => {
  console.log(table.table(arr));
};

module.exports = {
  generateMap,
  fillMap,
  addSnow,
  falling,
  printMap
};
