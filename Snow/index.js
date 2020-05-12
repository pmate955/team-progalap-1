const map = require('./map');

const main = () => {
  const arr = map.generateMap(10, 10);
  map.fillMap(arr);
  let snowFlakes = 1;
  setInterval(() => {
    map.falling(arr);
    map.addSnow(arr, snowFlakes);
    map.printMapAxel(arr);
    console.log(snowFlakes);
  }, 1000);
  const stdin = process.stdin;
  stdin.setRawMode(true); // Ne várjon enterre
  stdin.resume(); // Csak process.exit-el lehet kilépni
  stdin.setEncoding('utf8'); // Karaktereket kapjunk vissza
  stdin.on('data', (key) => { // Callback függvény
    if (key === 'q') {
      process.exit();
    }
    if (key === 'j') {
      if (snowFlakes < arr[0].length) {
        snowFlakes++;
      }
    }
    if (key === 'm') {
      if (snowFlakes > 0) {
        snowFlakes--;
      }
    }
  });
};
main();
