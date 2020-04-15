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
