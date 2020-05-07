// const table = require('table');
const ctx = require('axel');

const generate2dArray = (n, m) => {
  const arr = new Array(n); // Sorok létrehozása
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m); // minden sorhoz m oszlop hozzáadása
  }
  return arr;
};

const fill2dArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.round(Math.random() * 2);
    }
  }
};

// const config = {
//   columns: {
//     0: {
//       alignment: 'left',
//       width: 10
//     },
//     1: {
//       alignment: 'center',
//       width: 10
//     },
//     2: {
//       alignment: 'right',
//       width: 10
//     }
//   }
// };

const print2dArray = (arr) => {
  ctx.clear();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        ctx.bg(0, 0, 0);
      } else if (arr[i][j] === 1) {
        ctx.bg(200, 0, 0);
      } else {
        ctx.bg(0, 0, 200);
      }
      ctx.point(i + 1, j + 1);
    }
  }
  console.log();
};

const arr = generate2dArray(10, 10);
fill2dArray(arr);
print2dArray(arr);
// console.log(table.table(arr, config));
