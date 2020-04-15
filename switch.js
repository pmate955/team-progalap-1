const num = Math.round(Math.random() * 5);
switch(num) {   // Megadunk egy konkrét értéket pl változót
  case 1: console.log('Egy'); //Eseteket definiálunk az egyes értékekhez
          break;  // megtörjük a tovább futást, másképp minden ezt követőbe belefut
  case 2: console.log('Kettő'); 
          break;
  default: console.log('Nagyobb, mint kettő');  // Ha egyik sem teljesült, ez a rész fut le 
}

const a = parseInt(process.argv[2]) + parseInt(process.argv[3]);
console.log(a, process.argv[2]);