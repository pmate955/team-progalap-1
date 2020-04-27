const animals = ['cica', 'kutya'];
console.log(animals[0]);
console.log(animals);
console.log(animals.length); // tömb hosszát lekéri
animals[1] = 'tengerimalac';
console.log(animals);
animals.push('tigris'); // Tömbbe elemet rakni
animals[3] = 'pandamedve';
console.log(animals);
const lastAnimal = animals.pop(); // tömbből kiveszünk
console.log(lastAnimal, animals);

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

const powerOfTwo = (arr, n) => {
  let num = 2;
  for (let i = 0; i < n; i++) {
    arr.push(num);
    num *= 2;
  }
  return arr;
};

console.log(powerOfTwo([], 10));
