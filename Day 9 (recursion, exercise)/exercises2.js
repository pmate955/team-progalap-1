const readLine = require('readline-sync');

const series1 = () => {
  let a = readLine.questionInt('First element: ');
  const diff = readLine.questionInt('Diff: ');
  const n = readLine.questionInt('N: ');
  for (let i = 0; i < n; i++) {
    process.stdout.write(`${a} ,`); // a + ' ,'
    a += diff;
  }
  console.log();
};

const series2 = () => {
  let a = readLine.questionInt('First element: ');
  const quo = readLine.questionInt('Quo: ');
  const n = readLine.questionInt('N: ');
  for (let i = 0; i < n; i++) {
    process.stdout.write(`${a} ,`); // a + ' ,'
    a *= quo;
  }
  console.log();
};

const isTriangle = () => {
  const a = readLine.questionFloat('A side: ');
  const b = readLine.questionFloat('B side: ');
  const c = readLine.questionFloat('C side: ');
  if (a < b + c && b < a + c && c < a + b) {
    return true;
  } else {
    return false;
  }
};

console.log(isTriangle());
// series2();
