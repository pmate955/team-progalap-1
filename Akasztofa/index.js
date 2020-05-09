const readLine = require('readline-sync');
const dictionary = ['áéáéá'];
let word = '';
let guessedWord = [];
let life = 5;

const generateWord = () => {
  const randomIndex = Math.floor(Math.random() * dictionary.length);
  word = dictionary[randomIndex];
  guessedWord = [];
  for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
  }
  life = Math.round(word.length / 2);
};

const printGame = () => {
  console.log();
  for (let i = 0; i < guessedWord.length; i++) {
    process.stdout.write(guessedWord[i] + ' ');
  }
  console.log();
  console.log('Life:', life);
};

const isSolved = () => {
  for (let i = 0; i < guessedWord.length; i++) {
    if (guessedWord[i] === '_') {
      return false;
    }
  }
  return true;
};

// let str = 'cica';
// str[1] = 'd';
// console.log(str, str[0]);
// str = '';

const makeGuess = (char) => {
  let isFound = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      guessedWord[i] = char;
      isFound = true;
    }
  }
  return isFound;
};

const main = () => {
  generateWord();
  console.log('Hello, találj ki!');
  printGame();
  while (life > 0 && !isSolved()) {
    const char = readLine.keyIn('Press a character key!', { encoding: 'utf-8' });
    console.log(readLine.getRawInput().charCodeAt(0));
    const isFound = makeGuess(char);
    if (!isFound) {
      life--;
    }
    printGame();
  }
  if (life === 0) {
    console.log('You loose, the word was:', word);
  } else {
    console.log('You win');
  }
};

main();
