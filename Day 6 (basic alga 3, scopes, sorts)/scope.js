const name = 'Feri'; // Globális láthatóság
console.log(name);

const print = (asd) => { // Function parameter scope
  console.log(asd);
  const i = 0; // Function scope
  if (i === 0) {
    const k = 10; // Block scope
    console.log(k);
  }
  // console.log('Before const', name);
  const name = 'Máté';
  // console.log(k);
  console.log(i);
  console.log(name);
};

// console.log(asd);
// console.log(i); Nem érjük el a function scope miatt
const asd = '10';
print(asd);
