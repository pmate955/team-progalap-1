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

const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      process.stdout.write(arr[i].toString());
    } else {
      process.stdout.write(arr[i] + ', ');
    }
  }
  console.log();
};
// let numbers = powerOfTwo([], 10)
printArray(powerOfTwo([], 10));

const twoDigitsThree = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // const a = arr[i];
    if ((Math.abs(arr[i]) >= 10 && Math.abs(arr[i]) < 100) && arr[i] % 3 === 0) {
      console.log(arr[i]);
    }
  }
};

const twoDigitsThreeUpdated = (arr) => {
  for (const a of arr) {
    if ((Math.abs(a) >= 10 && Math.abs(a) < 100) && a % 3 === 0) {
      console.log(a);
    }
  }
};

twoDigitsThreeUpdated([1, 3, 33, 66, 12, 43, 13, -13, -12, -66]);
