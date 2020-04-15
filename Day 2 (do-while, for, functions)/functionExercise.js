// Készítsünk függvényt (abs), ami egy számot vár paraméterül,
// és visszaadja a szám abszolút értékét!

const abs = (a) => {
  if (a >= 0) {
    return a;
  } else {
    return a * -1;
  }
};

console.log(abs(6));

const signum = (a) => {
  if (a < 0) {
    return -1;
  } else if (a === 0) {
    return 0;
  } else {
    return 1;
  }
};

console.log('Sig1', signum(-10));
console.log('Sig2', signum(0));
console.log('Sig3', signum(5));

const pow = (a, b) => {
  const base = a;
  for (let i = 1; i < b; i++) {
    a *= base;
  }
  return a;
};

console.log('POW', pow(2, 10));
