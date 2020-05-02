const increment = (num) => { // Érték szerinti paraméterátadás
  num++;
  console.log(num);
};

const myNum = 5;
increment(myNum);
console.log('Original after method', myNum);

const addNumberToArray = (arr) => { // Referencia szerinti átadás
  arr.push(Math.round(Math.random() * 10));
  console.log('Inside before reassign', arr);
  arr = ['10', '20'];
  console.log('Inside', arr);
};

const myArr = [];
addNumberToArray(myArr);
console.log('After', myArr);

const addNewKey = (human) => {
  human.age = 10;
};

const human = { name: 'Feri' };
addNewKey(human);
console.log(human);
