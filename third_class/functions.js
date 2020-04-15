const sum = (a, b) => {
  if (!a || !b) {
    return 'ERROR';
  }
  console.log('Meghívtak', a, b);
  const res = a + b;
  return res; // a + b
};

function cica () {
  console.log('asd');
}

cica();

const sayHello = () => {
  const cica = 'Cica1';
  console.log('Hello', cica);
};

sayHello();

const result = sum(5, 4);
console.log('Sum:', result);
const result2 = sum(10, 23);
console.log('Sum2', result2);
const result3 = sum();
console.log(result3);
