const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
console.log(chalk.rgb(100, 100, 10)('Cica'))
;

const readline = require('readline-sync');
// const userName = readline.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
// const age = readline.questionInt('How old are you? ');

// if (age > 65) {
//   console.log('you are old');
// } else {
//   console.log('young');
// }

while (true) {
  const key = readline.keyIn('Press a key, or q to exit!');
  if (key === 'q') {
    console.log('Goodbye');
    break;
  } else {
    console.log('You pressed:', key);
  }
}
