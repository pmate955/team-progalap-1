const a = 2;
const b = 6;
const c = 3;
const d = Math.pow(b, 2) - 4 * a * c;
if (d < 0) {
  console.log('Nincs racionális gyök');
} else if (d === 0) {
  const x = -b / 2 * a;
  console.log('Egy gyök van:', x);
} else {
  const x1 = -b + Math.sqrt(d) / 2 * a;
  const x2 = -b - Math.sqrt(d) / 2 * a;
  console.log('Két gyök van:', x1, x2);
}
