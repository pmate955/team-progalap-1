const dictionary = ['cica', 'kutya', 'panzerkampfwagen'];
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
