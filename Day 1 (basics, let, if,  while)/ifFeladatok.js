let x = Math.round(Math.random() * 10) + 1;
let y = Math.round(Math.random() * 10) + 1;
console.log(x, y);

if (x > y) {
  console.log('Első a nagyobb');
} else if (x < y) {
  console.log('Második a nagyobb');
} else {
  console.log('Egyenlőek');
}

x = Math.round(Math.random() * 100) + 1;
y = Math.round(Math.random() * 100) + 1;
console.log(x, y);
if (x % y === 0) {
  console.log('Osztható x y-al');
} else {
  console.log('Nem oszthatóak');
}

x = Math.round(Math.random() * 201) - 100;
console.log(x);
if (x % 2 === 1) {
  console.log('Páratlan szám');
} else {
  console.log('Páros');
}
