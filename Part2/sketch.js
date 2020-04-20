var circles = [];

function setup() {
  createCanvas(640, 360);

  for (var i = 0; i < 400; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: 32
    };
    circles.push(circle);
  }

  for (var i = 0; i < circles.length; i++) {
    fill(0, 44, 10, 59);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r, circles[i].r);
  }
}
