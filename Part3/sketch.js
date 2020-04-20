
function setup () {
  createCanvas(640, 400);
}

function draw () {
  background(69, 97, 174);

  for (var x = 50; x <= width; x += 20) {
    for (var y = 50; y <= height; y += 20) {
      stroke(random(255));
      strokeWeight(2);
      line(x + 10, y + 20, width / 4, height / 2);
    }
  }
}
