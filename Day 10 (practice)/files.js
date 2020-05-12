const fs = require('fs');

const file = fs.readFileSync('demo.csv', 'utf8');

console.log(file);
const rows = file.split('\n');
console.log(rows);

const number = Math.random() * 100;
const out = 'Your number: ' + number;
fs.writeFileSync('num.txt', out);
