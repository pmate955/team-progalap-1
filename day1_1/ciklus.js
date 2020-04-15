let i = 0;
while (i < 10) { // feltétel teljesülése esetén fut a blokk
  console.log('Cica', i);
  i++; // növeljük az i változót
}

let j = 1; // ciklusváltozó
while (j <= 20) {
  if (j % 2 === 0) {
    console.log('Páros', j);
    // break; - kilép instant a ciklusból
    // continue; - a blokk további részét nem hajtja végre, ugrik a feltételvizsgálathoz
  }
  j++;
}
