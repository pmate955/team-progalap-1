// Szétválogatás
const separate = (src) => {
  const evens = [];
  const odds = [];
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
  return {
    evens,
    odds
  };
};

const separateByReference = (src, evens, odds) => {
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
};

const evens = [];
const odds = [];
separateByReference([1, 2, 3, 4, 5], evens, odds);
console.log('evens, odds', evens, odds);
// const separatedNumbers = separate([1, 2, 3, 4, 5, 6]);
// const evens = separatedNumbers.evens;
// console.log(evens);
// const { evens, odds } = separate([1, 2, 3, 4, 5, 6]);
// console.log(evens);
// console.log(odds);

// Metszet
const section = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) { // Eldöntés, ahol a tömb az src2, a keresett elem az src1[i]
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  console.log('Lépések', count);
  return out;
};
console.log('Section', section([1, 2, 3, 4, 5, 6, 1], [7, 8, 1, 2, 5]));

const union = (src1, src2) => {
  const out = [];
  for (const element of src1) { // Másolás tétel feltétel nélkül
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};

console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));
