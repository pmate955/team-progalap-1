const num = Math.round(Math.random() * 21) - 10;
console.log(num);
if (num > 0) { // 1 if
  console.log('Pozitív szám');
} else if (num === 0) { // bármennyi else if (akár 0 is)
  console.log('Nulllaaa');
} else { // 1 db else ág, de nem kötelező
  console.log('Negatív szám');
}

if (num > 0 && num % 2 === 0) { // ÉS művelet
  console.log('Pozitív páros');
}

if (num % 2 === 0 || num < 2) { // VAGY művelet
  console.log('Cica');
}

const name = 'Feri';
if (name === 'asd') {
  console.log('Üdv, Máté');
}
