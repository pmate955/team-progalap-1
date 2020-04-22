const sum = (a, b) => {
  console.log('Meghívtak');
  return a + b;
};

let num = 10;

const mul = (a, b) => {
  num *= 10;
  console.log('INSIDE', num);
  return a * b;
};

const PI = 3.1415;

// console.log('cica');
// for (let i = 0; i < 10; i++) {       ILYET NE
//   console.log(i);
// }

module.exports = {
  sum, // sum: sum
  cica: mul,
  PI,
  num
};
