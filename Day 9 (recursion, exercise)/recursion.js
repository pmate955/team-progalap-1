const counter = (count) => {
  console.log(count);
  if (count <= 0) return;
  count -= 1;
  counter(count);
};

const arrMin = (index, arr) => {
  if (index === 1) return arr[0]; // Ha elértük a legelső elemet, akkor visszaadjuk, mint legkisebb elem
  return Math.min(arr[index - 1], arrMin(index - 1, arr)); // Egyébként visszaadjuk az addigi legkisebb elem, és a soron következő indexű elem közül a kisebbet
};

const arr = [1, 2, -5, 10, 2];
console.log(arrMin(arr.length, arr));

const fibo = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n >= 2) return fibo(n - 1) + fibo(n - 2);
};

for (let i = 0; i < 10; i++) {
  process.stdout.write(fibo(i) + ' ');
}
