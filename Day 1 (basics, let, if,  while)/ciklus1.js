/*
Készíts programot, ami az 5,10,15,20,25.... sorozat elemeit írja ki.
Azt, hogy hány elem legyen kiírva, egy véletlenszerû egész számként
generáld 1-10 között.
*/

let count = Math.round(Math.random() * 9) + 1; // random * (max-min) + min
console.log(count);
let element = 5;
while (count > 0) {
  console.log(element);
  element += 5;
  count--;
}
