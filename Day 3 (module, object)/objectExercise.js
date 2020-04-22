const human = { // 1-es feladat
  name: 'ASD',
  height: 120,
  age: 10,
  isMale: false,
  address: '6723 Szeged ...'
};

console.log(human);

const grow = (obj) => { // 2-es feladat
  if (obj.age) {
    obj.age++;
  }
  return obj;
};

console.log(grow(human));
console.log(human);
// console.log(grow({ name: 'Feri', age: 22 }));

const getOlder = (a, b) => { // 3-as feladat
  if (a.age > b.age) {
    return a;
  } else {
    return b;
  }
};
const feri = { name: 'Feri', age: 66 };
const geza = { name: 'Géza', age: 320 };
console.log(getOlder(feri, geza));
