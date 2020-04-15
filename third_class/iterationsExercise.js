// 9) Készíts programot, ami 1 és 100 között kiírja az PÁRATLAN számot.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// let i = 1;
// while (i < 100) {
//   console.log(i);
//   i += 2;
// }

// 14) Készíts programot, ami egy x változóba egy 1-3 közötti,
// egy y változóba pedig egy 5-10 közötti véletlenszerû egész számot
// tárol. A program írja ki a két szám között található összes számot.
// (x és y NE szerepeljen a kiírásban!)

const x = Math.round(Math.random() * 2 + 1);
const y = Math.round(Math.random() * 5 + 5);
console.log(x, y);
for (let i = x + 1; i < y; i++) {
  process.stdout.write(i + ', ');
}
console.log();
