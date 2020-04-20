var cwidth = 640
var cheight = 400
var row = 10

function setup() {
  createCanvas(cwidth, cheight);
}

function draw() {
  background(0);
  strokeWeight(8);
  stroke(50);
  fill(127);

  // For loop for the squares
  for (var y = 0; y < cheight; y = y + 50) {
    for (var x = 0; x < cwidth; x = x + 50) {
      fill(random(255));
      rect(x, y, 20, 20);
    }
  }
  // For loop for the points
  for (var y = 0; y < cheight; y = y + 20) {
    for (var x = 0; x < cwidth; x = x + 20) {
      stroke('purple');
      strokeWeight(10);
      point(x, y);
    }
  }
}
