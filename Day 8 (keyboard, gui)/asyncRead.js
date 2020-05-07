const stdin = process.stdin;
stdin.setRawMode(true); // Ne várjon enterre
stdin.resume(); // Csak process.exit-el lehet kilépni
stdin.setEncoding('utf8'); // Karaktereket kapjunk vissza
stdin.on('data', (key) => { // Callback függvény
  console.log('You pressed: ', key);
  if (key === 'q') {
    process.exit();
  }
});

console.log('cica');
