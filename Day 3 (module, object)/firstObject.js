const first = {
  name: 'Mate',
  age: 99,
  isMale: true,
  sayHello: () => { console.log('Hello, I\'m Mate'); },
  child: {
    name: 'Géza',
    age: 1,
    isMale: true
  },
  address: {
    city: 'Szeged',
    zip: 6723,
    street: 'Kossuth'
  }
};

console.log(first);
first.name = 'Feri';
console.log(first);
first.sayHello();
console.log(Object.keys(first));
const field = 'name';
console.log(first[field]); // Lodash
console.log(first.child.name);
