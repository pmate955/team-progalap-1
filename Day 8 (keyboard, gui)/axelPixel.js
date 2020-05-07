const ctx = require('axel');

// Clear the terminal
ctx.clear();

// Sets the pixel BG color to orange

// Draw 100 random blue dots on the console
for (var i = 0; i < 100; i += 1) {
  ctx.bg(Math.round(Math.random() * 256), Math.round(Math.random() * 256), Math.round(Math.random() * 256));
  ctx.point(
    Math.random() * ctx.cols,
    Math.random() * ctx.rows
  );
}

ctx.cursor.restore();
