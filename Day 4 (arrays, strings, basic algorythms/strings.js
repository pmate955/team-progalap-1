const name = 'Ferenc';
for (let i = 0; i < name.length; i++) {
  const ch = name.charAt(i);
  console.log(ch);
}

for (const ch of name) { // foreach
  console.log(ch, ' 2');
}

const replaceEtoA = (str) => {
  let out = '';
  for (const ch of str) {
    if (ch === 'e') {
      out += 'a';
    } else {
      out += ch;
    }
  }
  return out;
};

console.log(replaceEtoA('elem'));
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace(/e/g, 'a'));
console.log(name.substring(0, 2));
console.log(name.charCodeAt(0));
const input = '1;3;4;6;9';
console.log(input.split(';'));

const toNumbers = (str) => {
  let out = '';
  for (const ch of str) {
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
      out += ch.charCodeAt(0) + ' ';
    } else {
      out += ch + ' ';
    }
  }
  return out;
};

console.log(toNumbers('abc123ABC'));
