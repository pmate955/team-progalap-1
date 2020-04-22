const isPrime = (num) => {
  for (let div = 2; div < num; div++) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(11), '11');
console.log(isPrime(673623));

const printPrimes = (n) => {
  let actual = 2;
  while (n > 0) {
    if (isPrime(actual)) {
      process.stdout.write(actual + ', ');
      n--;
    }
    actual++;
  }
  console.log();
};

printPrimes(20);
