const generateArray = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.round(Math.random() * 9 + 1));
  }
  return arr;
};

console.log(generateArray(10));

// Eldöntés
const containsElement = (arr, element) => {
  for (const actual of arr) {
    if (actual === element) {
      return true;
    }
  }
  return false;
};

const containsElement2 = (arr, element) => {
  let i = 0;
  while (i < arr.length && arr[i] !== element) {
    i++;
  }
  // return i < arr.length;
  if (i < arr.length) {
    return true;
  } else {
    return false;
  }
};

console.log('Eldöntés', containsElement2([1, 2, 3], 3));
console.log('Eldöntés JS-ben', [1, 2, 3].includes(1));

// Keresés

const indexOfArray = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};

console.log('IndexOf', indexOfArray([1, 2, 3, 4], 5));
console.log('IndexOf in JS', [1, 2, 3, 4].indexOf(5));

// EXTRA ----------------------
const humans = [
  { name: 'Feri', age: 20 },
  { name: 'Géza', age: 19 },
  { name: 'Mate', age: 11 }
];

const searchHumanByName = (arr, name) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }
  return {};
};

console.log('SEARCH', searchHumanByName(humans, 'Feriii'));

const searchHuman = (arr, key, value) => {
  for (const human of arr) {
    if (human[key] === value) {
      return human;
    }
  }
  return {};
};

console.log('Search 2', searchHuman(humans, 'age', 19));

// EXTRA VÉGE --------------

// Másolás

const copy2x = (src, dest) => {
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i] * 2;
  }
  return dest;
};

console.log('Copy', copy2x([1, 2, 3, 4], []));

// Kiválogatás

const selectEvens = (src) => {
  const out = [];
  let j = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      out[j++] = src[i]; // out.push(src[i]);
    }
  }
  return out;
};

console.log('SelectEvens', selectEvens([1, 2, 4, 5, 6]));
