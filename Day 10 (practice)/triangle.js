const triangle2 = (a, b, c) => {
  const k = a + b + c;
  const s = k / 2;
  const t = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return {
    volume: k,
    area: t
  };
};

console.log(triangle2(6, 6, 4));

const countSomeNumbers = (arr) => {
  let count = 0;
  for (const element of arr) {
    if (element % 2 === 0 && element % 3 === 0) {
      count++;
    }
  }
  return count;
};

const numToArray = (num) => {
  const out = [];
  while (num > 10) {
    const s = num % 10;
    out.unshift(Math.round(s));
    num /= 10;
  }
  out.unshift(Math.round(num));
  return out;
};

const num = 1233210;
console.log(numToArray(num));

console.log(countSomeNumbers([1, 3, 6, 12, 4, 2]));
