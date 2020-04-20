
function setup () {
  createCanvas(640, 400);
}

function draw () {
  background(69, 97, 174);
  fill(76, 174, 69);
  noStroke();
  var diameter = 50;

  for (var x = 0; x < width / diameter; x = x + 1) {
    for (var y = 0; y < height / diameter; y = y + 1) {
      ellipse(
        diameter / 2 + x * diameter,
        diameter / 2 + y * diameter,
        diameter,
        diameter
      );
    }
  }
}
