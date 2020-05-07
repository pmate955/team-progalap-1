const term = require('terminal-kit').terminal;
const menuItems = ['Start', 'Highscore', 'Exit'];
term.singleLineMenu(menuItems, (err, arg) => {
  if (err) {
    return;
  }
  term.clear();
  if (arg.selectedIndex === 0) {
    console.log('Start, have fun');
  } else if (arg.selectedIndex === 1) {
    console.log('You are the best!');
  } else {
    console.log('Goodbye');
  }
  process.exit();
});
