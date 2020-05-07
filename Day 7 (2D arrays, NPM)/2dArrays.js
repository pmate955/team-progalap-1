// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(arr[0][0]); // első sor elemei
// console.log(arr[0][1]);
// console.log(arr[0][2]);
// console.log(arr[1][0]); // második sor
// console.log(arr[1][1]);
// console.log(arr[1][2]);

const generate2dArray = (n, m) => {
  const arr = new Array(n); // Sorok létrehozása
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m); // minden sorhoz m oszlop hozzáadása
  }
  return arr;
};
// ( logikai feltétel ? 'igaz' : 'hamis' ) ternáris operátor
const print2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + (j < arr[i].length - 1 ? ', ' : '\r\n'));
    }
  }
};

const fill2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.round(Math.random() * 9 + 1);
    }
  }
};
// Összegzés tétel
const sum2dArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  max2dArr(arr);
  return sum;
};

// Maximum
const max2dArr = (arr) => {
  let max = arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j];
      }
    }
  }
  return max;
};

const arr = generate2dArray(3, 3); // Tömb létrehozása
fill2dArray(arr); // Feltöltés random számokkal
print2dArray(arr); // Kiíratás
console.log('sum:', sum2dArray(arr));
console.log('max:', max2dArr(arr));
